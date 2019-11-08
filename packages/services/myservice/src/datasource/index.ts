import { getAgify, getBatchAgify } from '@otomer/lib-agify';
import {
  BasePredictionDetails,
  GetAgePredictionResponse,
  GetBatchAgePredictionResponse,
  PredictionDetails,
} from './types';

const dateString = () => new Date().toISOString().slice(0, 10);

export const fetchAgePrediction = async (name: string, country?: string) => {
  /* eslint-disable @typescript-eslint/camelcase */
  const response = await getAgify({ name, country_id: country });
  const { age, count, country_id, name: fullName } = response;
  const predictionDetails: PredictionDetails = { age, count, country: country_id, name: fullName };
  /* eslint-enable @typescript-eslint/camelcase */
  return { date: dateString(), predictionDetails } as GetAgePredictionResponse;
};

export const fetchBatchAgePrediction = async (names: string[]) => {
  const response = await getBatchAgify({ names });
  const result: BasePredictionDetails[] = [];

  for (let i = 0; i < response.length; i += 1) {
    const { age, count, name } = response[i];
    result.push({ age, count, name });
  }

  return { date: dateString(), predictionDetails: result } as GetBatchAgePredictionResponse;
};
