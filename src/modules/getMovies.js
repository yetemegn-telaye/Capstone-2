import commentClicked from './commentPopup.js';
import display from './display.js';
import { getLikes, postLikes } from './likes.js';

const url = ('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/eC8v1nWSCKC4m4T5bPlw/likes/');

const baseUrl = 'https://api.tvmaze.com/search/shows';

const getMovies = async () => {
  const response = await fetch(`${baseUrl}/?q=girls`);
  const movies = await response.json();
  const likesCounter = await getLikes();
  
  display(movies,likesCounter);
  
  const commentBtns = document.querySelectorAll('.comment-btn');

  commentClicked(commentBtns, movies);
  const likeBtn = document.querySelectorAll('.like-Btn');
  likeBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      postLikes(url, btn.id, btn.parentElement.nextElementSibling);
      getLikes();

    });
  });


  
};

export default getMovies;