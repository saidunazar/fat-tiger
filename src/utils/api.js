export const fetchData = async (url) => {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  if (response.ok) {
    return jsonResponse;
  } else {
    throw new Error(jsonResponse.error);
  }
};
