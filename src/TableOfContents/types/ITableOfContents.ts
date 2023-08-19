export interface ITableOfContents {
  entities: TocEntities;
  topLevelIds: TocPageId[];
}

export interface TocEntities {
  pages: TocPages;
}

export interface TocPage {
  doNotShowWarningLink?: boolean;
  id: TocPageId;
  level: number;
  pages?: TocPageId[];
  parentId: string;
  title: string;
  url?: string;
}

export type TocPages = Record<TocPageId, TocPage>;

export type TocPageId = string;
