export const get = async (endpoint) => {
  try {
    const response = await fetch(endpoint);
    return response.json();
  } catch (err) {
    throw new Error(err);
  }
};
