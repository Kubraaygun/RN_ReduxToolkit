export async function getRequest(URL, params) {
  const response = await Client.get(URL, {params: params});
}
