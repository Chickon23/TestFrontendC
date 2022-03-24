export type LandingpageEntity = {
  title: string;
  urlKey: string;
  city: string;
  markDownText: string;
  fullText: string;
  categoryId?: string;
  subCategoryIds?: [];
  jobs?: [];
};

export interface ILandingpageState {
  entities: LandingpageEntity;
  loading: boolean;
}
