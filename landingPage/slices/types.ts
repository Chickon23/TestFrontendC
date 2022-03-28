type LandingpageInfo = {
  Title: string;
  UrlKey: string;
  City: string;
  MarkDownText: string;
  FullText: string;
  CategoryId?: string;
  SubCategoryIds?: [];
};

export type LandingpageEntity = {
  jobs?: [];
  landingPage: LandingpageInfo;
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
