export const getDatas = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character');

  if (!response.ok) throw new Error('fetching failed!');

  const data = await response.json();
  return data;
};
