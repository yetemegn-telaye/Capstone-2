import './style.css';

const container = document.getElementById('container');

const display = (movie) => {
  container.innerHTML += `
  <div class="movie-list" >
  <h1 class="movie-Name">${movie.name}</h1>
  <img class="images" src = ${movie.image.medium} alt="movie image">
  <div>
      
      <div class="type-year">
      <h2 class="movie-Type">${movie.genres[0]}</h2>
      <P class="years">${movie.ended}</P>
      </div>
      <p class="language">language: ${movie.language}</p>
      <P class="run-Time">  Running time: <span>${movie.runtime}</span></P>
    
  </div>
  <div class="like">
  <button id="btn"><i class="fa-solid fa-heart like-Btn"></i></button>
  <input type="number" class="input" value="0" name="">
  </div>
  <div class="Btn-reserve">
      <button class="description" >description</button>
      <button class="Reservation">Reservation</button>
  </div>
    </div>
  `;
};

// const like = () => {

const render = async () => {
  try {
    const response = await fetch(' https://api.tvmaze.com/search/shows?q=girls');
    const data = await response.json();
    data.forEach((element) => {
      display(element.show);
    });

    // show.forEach((movie) => {
    //     display(movie)
    // })
    // console.log(show)
  } catch (error) {
    // console.log('hell');
  }
};
render();
