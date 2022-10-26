const display = (movies) => {
  const moviesContainer = document.querySelector('.movies-container');

  movies.forEach((movie) => {
    moviesContainer.innerHTML += `
        <div class="movie-list">
    <h1 class="movie-Name">${movie.show.name}</h1>
    <img class="images" src = ${movie.show.image.medium} alt="movie image">
    
        
        <div class="type-year">
        <h2 class="movie-Type">${movie.show.genres[0]}</h2>
        <P class="years">Show Ended : ${movie.show.ended}</P>
        </div>
         <p class="language">Language: ${movie.show.language}</p>
        <P class="run-Time">  Duration: <span>${movie.show.runtime}</span></P>
      
    
    <div class="like">
    <button id="btn"><i class="fa-solid fa-heart like-Btn"></i></button>
    <input type="number" class="input" value="0" name="">
    </div>
    <div class="Btn-reserve">
        <button class="comment-btn">Comment</button>
        <button class="Reservation">Reservation</button>
    </div>
    </div>
        `;
  });
};

export default display;
