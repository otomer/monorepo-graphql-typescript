export type AgifyGetRequest = {
  country_id?: string;
  name: string;
};

export type AgifyGetResponse = {
  age: number;
  count: number;
  country_id: string;
  name: string;
};

export type AgifyGetBatchRequest = {
  names: string[];
};

export type AgifyGetBatchResponseItem = {
  age: number;
  count: number;
  name: string;
};
