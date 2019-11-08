import { fetchAgePrediction } from '../../datasource';

export const getAgePrediction = async (name: string, country?: string) => {
  const response = await fetchAgePrediction(name, country);
  return response;
};
