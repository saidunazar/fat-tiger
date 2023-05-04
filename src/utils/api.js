export const fetchData = async (url) => {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  if (response.ok) {
    const data = jsonResponse.data;
    return data;
  } else {
    throw new Error(jsonResponse.error);
  }
};
