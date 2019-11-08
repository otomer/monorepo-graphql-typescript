export type BasePredictionDetails = {
  age: number;
  count: number;
  name: string;
};

export type PredictionDetails = BasePredictionDetails & {
  country: string;
};

export type RequestDetails = {
  date: string;
};

export type GetAgePredictionResponse = RequestDetails & {
  predictionDetails: PredictionDetails;
};

export type GetBatchAgePredictionResponse = RequestDetails & {
  predictionDetails: BasePredictionDetails[];
};
