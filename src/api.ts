export const fecthApi = async () => {
  const response = await fetch('https://swapi.dev/api/planets');
  const data = await response.json();
  const { results } = data;
  return results;
};
