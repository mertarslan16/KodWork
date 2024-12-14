import {ParamListBase} from '@react-navigation/native';
export interface Job {
  id: string | number;
  name: string;
  company: {
    name: string;
  };
  locations: Array<{
    name: string;
  }>;
  levels: Array<{
    name: string;
    short_name: string;
  }>;
  contents: string;
  refs?: {
    landing_page: string;
  };
}

export interface Location {
  name: string;
}

export interface Level {
  name: string;
  short_name: string;
}

export interface RootStackParamList {
  Jobs: undefined;
  JobDetail: {job: Job};
  Favorites: undefined;
}

export interface RootStackParamList extends ParamListBase {
  JobList: undefined;
  JobDetail: {job: Job};
  Favorites: undefined;
}
