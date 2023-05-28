const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/wjdpmO0vsnmDObCBlsMV/scores';

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