import commentClicked from './commentPopup.js';
import display from './display.js';

const baseUrl = 'https://api.tvmaze.com/search/shows';

const getMovies = async () => {
  const response = await fetch(`${baseUrl}/?q=girls`);
  const movies = await response.json();
  display(movies);
  const commentBtns = document.querySelectorAll('.comment-btn');

  commentClicked(commentBtns,movies);
};

export default getMovies;