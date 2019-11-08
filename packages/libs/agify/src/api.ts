import request from './request';
import { AgifyGetBatchRequest, AgifyGetBatchResponseItem, AgifyGetRequest, AgifyGetResponse } from './types';

const getAgify = (payload: AgifyGetRequest): Promise<AgifyGetResponse> => {
  const urlCountryQuery = payload.country_id ? `&country_id=${payload.country_id}` : '';
  return request({
    method: 'GET',
    url: `/?name=${payload.name}${urlCountryQuery}`,
  });
};

const getBatchAgify = (payload: AgifyGetBatchRequest): Promise<AgifyGetBatchResponseItem[]> => {
  const delimeter = 'name[]=';
  return request({
    method: 'GET',
    url: `/?${delimeter}${payload.names.join(`&${delimeter}`)}`,
  });
};

export { getAgify, getBatchAgify };
