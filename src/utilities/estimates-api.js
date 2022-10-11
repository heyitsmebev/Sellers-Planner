import sendRequest from './send-request';

const BASE_URL = '/api/estimates';

export function estimates(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

