import type { ITableOfContents, TocPageId, TocPages } from '../types';

type TemplateNode<T> = Record<string, T | null>;

interface Template extends TemplateNode<Template> {}

function titleToId(title: string) {
  return title.split(' ').join('-');
}

function generateFixture(template: Template): ITableOfContents {
  const topLevelIds: TocPageId[] = Object.keys(template).map(titleToId);

  const pages: TocPages = {};

  (function traverse(tpl: Template, level: number, parentId: TocPageId) {
    const pageTitles = Object.keys(tpl);

    pageTitles.forEach(title => {
      const id = titleToId(title);
      pages[id] = { id, level, parentId, title };

      const nextPage = tpl[title];
      if (nextPage) {
        pages[id].pages = Object.keys(nextPage).map(titleToId);
        traverse(nextPage, level + 1, id);
      }
    });
  })(template, 0, 'ij');

  return {
    entities: { pages },
    topLevelIds,
  };
}

const template: Template = {
  'Page 1': {
    'Page 1 1': {
      'Page 1 1 1': {
        'Page 1 1 1 1': null,
        'Page 1 1 1 2': null,
      },
      'Page 1 1 2': null,
    },
    'Page 1 2': null,
    'Page 1 3': null,
  },
  'Page 2': {
    'Page 2 1': null,
    'Page 2 2': null,
  },
  'Page 3': null,
};

console.log(JSON.stringify(generateFixture(template)));
