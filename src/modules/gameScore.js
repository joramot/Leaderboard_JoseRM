const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/xIjZH1eNC8HEDUBkrdTJ/scores';

export const getGameScore = async () => {
  const response = await fetch(url).then((response) => response.json());
  return response.result;
};

export const postGameScore = async (body) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
  });
};
