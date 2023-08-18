export interface ITableOfContents {
  entities: TOCEntities;
  topLevelIds: TOCPageId[];
}

export interface TOCEntities {
  pages: Record<TOCPageId, TOCPage>;
}

export interface TOCPage {
  doNotShowWarningLink: boolean;
  id: TOCPageId;
  level: number;
  pages: TOCPageId[];
  parentId: string;
  title: string;
  url: string;
}

export type TOCPageId = string;
