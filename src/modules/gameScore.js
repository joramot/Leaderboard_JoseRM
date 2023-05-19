const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Z3Gx1r4rIr1KZxpHl25Q/scores';

export const getGameScore = async () => {
  const response = await fetch(url).then((response) => response.json());
  return response.result;
};

export const postGameScore = async (body) => {
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(body),
  });
};