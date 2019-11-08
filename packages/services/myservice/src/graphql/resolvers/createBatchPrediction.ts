import { fetchBatchAgePrediction } from '../../datasource';

export const createBatchPrediction = async ({ names }: { names: string[] }) => {
  const response = await fetchBatchAgePrediction(names);
  return response;
};
