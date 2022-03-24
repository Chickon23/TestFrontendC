export type ConfigEntity = {
  color: string;
  name: string;
};

export interface IConfigState {
  entities: ConfigEntity;
  loading: boolean;
}
