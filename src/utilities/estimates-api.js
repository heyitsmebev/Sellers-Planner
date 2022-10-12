import sendRequest from './send-request';

const BASE_URL = '/api/estimates';

export function getAll() {
  return sendRequest(BASE_URL);
}


export function createEstimates(estimateData) {
  return sendRequest(`${BASE_URL}`, 'POST', estimateData);
  console.log(estimateData)
}

