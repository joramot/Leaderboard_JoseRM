import { postGameScore, getGameScore } from './gameScore.js';

const playGame = () => {
  const btnRefresh = document.querySelector('.refresh');
  const btnAddScore = document.querySelector('.add_score');
  const listScore = document.querySelector('.list_score');
  const name = document.querySelector('.name');
  const score = document.querySelector('.score');

  const displayScores = async () => {
    const scores = await getGameScore();
    listScore.innerHTML = '';
    scores.forEach((score) => {
      listScore.innerHTML += `<li>${score.user}: ${score.score}</li>`;
    });
  };

  const addScores = () => {
    const data = {
      user: name.value,
      score: score.value,
    };
    postGameScore(data);
    name.value = '';
    score.value = '';
  };

  displayScores();
  btnRefresh.addEventListener('click', displayScores);
  btnAddScore.addEventListener('click', addScores);
};

export default playGame;