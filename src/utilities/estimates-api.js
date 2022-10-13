import sendRequest from './send-request';

const BASE_URL = '/api/estimates';

export function getAllEstimates() {
  return sendRequest(BASE_URL);
}

export function getEstimatesById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function deleteEstimates(id) {
  return sendRequest(`${BASE_URL}/${id}`, "DELETE");
}

export function createEstimates(estimateData) {
  return sendRequest(`${BASE_URL}`, 'POST', estimateData);
}

