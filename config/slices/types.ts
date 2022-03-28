export interface BaseSettingsEntity {
};

export interface JobListWidgetSettings extends BaseSettingsEntity{
  JobCount: number
};

export interface WidgetSettingEntity {
  Name: string;
  Settings: BaseSettingsEntity
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
