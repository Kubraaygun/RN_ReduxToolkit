import Client from './instance';

export async function getRequest(URL, params) {
  const response = await Client.get(URL, {params: params});
  return response;
}

export async function postRequest(URL, payload) {
  const response = await Client.post(URL, payload);
  return response;
}

export async function patchRequest(URL, payload) {
  const response = await Client.patch(URL, payload);
  return response;
}

export async function putRequest(URL, params) {
  const response = await Client.get(URL, {params: params});
  return response;
}

export async function getRequest(URL, params) {
  const response = await Client.get(URL, {params: params});
  return response;
}

export async function getRequest(URL, params) {
  const response = await Client.get(URL, {params: params});
  return response;
}
