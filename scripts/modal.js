const openModal = ({ target }) => {
  const modal = document.getElementById('modal');
  document.body.classList.toggle('no-scroll');

  const newDiv = document.createElement('div');
  newDiv.classList.toggle('modal-content');

  const content = target.cloneNode(true);

  content.style.maxWidth = '100vw';
  content.style.maxHeight = '95vh';

  newDiv.appendChild(content);

  modal.appendChild(newDiv);
  modal.style.display = 'grid';
};

const closeModal = (modal) => {
  modal.style.display = 'none';
  modal.innerHTML = '';
  document.body.classList.toggle('no-scroll');
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  const modal = document.getElementById('modal');
  if (event.target == modal) {
    closeModal(modal);
  }
};
