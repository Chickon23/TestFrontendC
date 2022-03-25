type Region = {
  country: string;
  idLocation: string;
  latitude: number;
  longitude: number;
  placeId: string;
  region: string;
  state: string;
  street: string;
  zip: string;
};

export type JobAd = {
  applicationType: string;
  ausland: boolean;
  backfill: boolean;
  boost: boolean;
  categories: Array<number>;
  categoryGroupFactor: number;
  checkedDate: string;
  chiffre: boolean;
  cities: Array<string>;
  clickGoalPercentage: number;
  clicks: number;
  companyName: string;
  companyNameUrlFormat: string;
  corporation: string;
  customerNumber: string;
  displayFormat: string;
  email: string;
  employer: 1;
  endDate: string;
  externalLink: boolean;
  fromPortal: boolean;
  geo: Array<number>;
  id: string;
  isPortalProduct: boolean;
  jpgAd: boolean;
  lastUpdate: string;
  link: string;
  linkInternal: string;
  locationIds: Array<string>;
  logoId: number;
  logoLink: string;
  logoUrl: string;
  mobileVersion: string;
  noCompanySearch: boolean;
  portal: string;
  positionAddition: string;
  positionTitle: string;
  prio: string;
  prioCategoryId: number;
  prioSubcategoryId: number;
  pushLevel: number;
  recall: boolean;
  region: string;
  regions: Array<Region>;
  salaryMax: number;
  salaryMin: number;
  startDate: string;
  subcategories: Array<number>;
  textMiningOccupationIds: Array<number>;
  topJob: boolean;
  video: boolean;
  zipCodes: Array<string>;
};

type JobAds = {
  distance: number;
  isRelevant: boolean;
  locationMatch: boolean;
  relevanceHighscore: number;
  jobAd: JobAd;
};

export type FullTextSearchEntity = {
  count: number;
  countRelevant: number;
  isOnlineId?: boolean;
  facettes?: any;
  jobAds: Array<JobAds>;
};

export interface ISearchState {
  entities: FullTextSearchEntity;
  loading: Boolean;
}
