type LandingpageInfo = {
  title: string;
  urlKey: string;
  city: string;
  markDownText: string;
};

export type LandingpageEntity = LandingpageInfo & {
  fullText: string;
  categoryId?: string;
  subCategoryIds?: [];
  jobs?: [];
};

export interface ILandingpageState {
  entities: LandingpageEntity;
  loading: boolean;
}

export type AvailableLandingpagesEntity = {
  landingpages: Array<LandingpageInfo>;
};

export interface IAvailableLandingpageState {
  entities: any;
  loading: boolean;
}
