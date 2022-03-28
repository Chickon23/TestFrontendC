/*
 "WidgetSettings": [
    {
      "Name": "SearchResultListWidget",
      "Settings": {
        "JobCount": 25
      }
    },
    {
      "Name": "Super Tolle Jobs",
      "Settings": {
        "TopJobs": 2
      }
    }
  ]
*/

export interface WidgetSettingEntity {
  Name: string;
  Settings: {
    // TODO: maybe separate these properties somehow -> they depend on the type of the widget
    JobCount?: number
    TopJobs?: number
    };
};

export type ConfigEntity = {
  Color: string;
  Name: string;
  WidgetSettings: WidgetSettingEntity[];
};

export interface IConfigState {
  entities: ConfigEntity;
  loading: boolean;
}
