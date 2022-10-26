const commentPopup = (btn, popupComment, movie) => {
  const allElements = btn.parentElement.parentElement.children;

  popupComment.innerHTML += `
    <div class="popup">
    <span class="close-btn">X</span>
        <div class="popup-content">
            
            <img src="${movie.image.medium}"/>
            <h1>${movie.name}</h1>
            <div class="popup-detail">
            <p>Genre : ${movie.genres[0]}</p>
            <p> Show ended: ${movie.ended} </p>
            <p>Language : ${movie.language}</p>
            <p>Duration: ${movie.runtime}</p>
            </div>
            <h4>Comments (no. comments)</h4>
            <p>03/11/2021 Alex: I'd love to buy it!</p>
            <p>03/11/2021 Mia: I love!</p>
            <h4>Add a comment</h4>
            <input type="text" placeholder="Your name" name="name" class="comment-input"/>
            <input type="textarea" placeholder="Your insights" name="comment" class="comment-input"/>
            <button class="comment-btn add-comment">Comment</button>
        </div>
        </div>
    `;
  document.body.appendChild(popupComment);
};

const commentClicked = (btns, movies) => {
  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const popupComment = document.createElement('div');
      popupComment.classList.add('popup-window');

      if (popupComment.style.display === 'none') {
        popupComment.style.display = 'block';
      } else if (popupComment.style.display === 'block') {
        popupComment.style.display = 'none';
      }
      movies.forEach((movie) => {
        if (movie.show.id === Number(btn.id)) {
          commentPopup(btn, popupComment, movie.show);
        }
      });

      const closeBtn = document.querySelectorAll('.close-btn');
      closeBtn.forEach((closeBt) => {
        closeBt.addEventListener('click', () => {
          popupComment.style.display = 'none';
        });
      });
    });
  });
};

export default commentClicked;