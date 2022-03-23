type ConfigEntity = {
  color: string;
  name: string;
};

export interface IConfigState {
  entities: Array<ConfigEntity>;
  loading: boolean;
}
