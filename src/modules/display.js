const display = (movies) => {
  const moviesContainer = document.querySelector('.movies-container');

  movies.forEach((movie) => {
    moviesContainer.innerHTML += `
        <div class="movie-list" >
    <h1 class="movie-Name">${movie.show.name}</h1>
    <img class="images" src = ${movie.show.image.medium} alt="movie image">
    
        
        <div class="type-year">
            <h3 class="movie-Type">Genre: ${movie.show.genres[0]}</h3>
            <p class="language">Language: ${movie.show.language}</p>
       
        </div>
        
    
    <div class="like">
    <button id="btn"><i id=${movie.show.id} class="fa fa-solid fa-heart like-Btn"></i></button>
    <p class="count"></p>
    </div>
    <div class="Btn-reserve">
        <button class="comment-btn" id=${movie.show.id}>Comment</button>
        <button class="Reservation">Reservation</button>
    </div>
    </div>
        `;
  });
};

export default display;
