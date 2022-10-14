import sendRequest from './send-request';

const BASE_URL = '/api/estimates';

export function getAllEstimates() {
  return sendRequest(BASE_URL);
}

export function getEstimatesById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export async function updateEstimates(newData, id) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', newData)
}

export function deleteEstimates(id) {
  return sendRequest(`${BASE_URL}/${id}`, "DELETE");
}

export function createEstimates(estimateData) {
  return sendRequest(`${BASE_URL}/new`, 'POST', estimateData);
}

