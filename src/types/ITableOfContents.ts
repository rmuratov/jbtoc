export interface ITableOfContents {
  entities: TocEntities;
  topLevelIds: TocPageId[];
}

export interface TocEntities {
  pages: Record<TocPageId, TocPage>;
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

export type TocPageId = string;
