const projects = {
  CardMaker: {
    title: 'CardMaker',
    info: [
      'CardMaker allows you to customize and save screenshots/cards of your favorite tweets and genius lyrics with just a few clicks.',
      'You just need to paste the URL of the tweet or genius song, customize the card using the range of styles and colors available and hit download. Fast and simple.',
      'This was an app I decided to make in order to improve my React knowledge. It also expanded my skills in DOM manipulation, JavaScript and CSS.',
    ],
    used: ['React', 'React Router', 'SCSS', 'JavaScript'],
    link: 'https://card-maker-react-app.herokuapp.com',
    images: [
      '../images/CardMaker/Twitter.png',
      '../images/CardMaker/Genius.png'
    ],
  },
  AniMovies: {
    title: 'AniMovies',
    info: [
      'AniMovies is my first React app.',
      'The idea was to have the info about all the animation movies my family owns, in one single place.',
      "I chose React in order to learn about it since it was talked about a lot. I had previous knowledge in React Native so it wasn't hard to pick up.",
    ],
    used: ['React', 'React Router', 'TailwindCSS', 'JavaScript'],
    images: [
      '../images/AniMovies/Home.png',
      '../images/AniMovies/Search.png',
      '../images/AniMovies/Movie.png',
    ],
  },
  BasketballManager: {
    title: 'BasketballManager',
    info: [
      'BasketballManager is my personal favorite.',
      'I always liked games in which you could build and control your own basketball team, but the options weren\'t many and were mostly outdated. Since I knew a bit of React Native I decided "Why not make my own?". Little did I know that this was way over my abilities.',
      'The idea is simple, you choose a team and have total control over it: trades, signings, draft, etc. The main objective is to become a champion, however, since it is so user controlled, the possibilities are endless.',
      "Although it isn't finished, I think it's, by far, the project that greater improved my skills.",
    ],
    used: ['Expo', 'React Native', 'Redux', 'React Navigation', 'JavaScript'],
    images: [
      '../images/BasketballManager/Home.jpg',
      '../images/BasketballManager/Dashboard.jpg',
      '../images/BasketballManager/Calendar.jpg',
      '../images/BasketballManager/Game.jpg',
      '../images/BasketballManager/Team.jpg',
      '../images/BasketballManager/Player.jpg',
      '../images/BasketballManager/Coaching.jpg',
      '../images/BasketballManager/Finances.jpg',
      '../images/BasketballManager/TeamStats.jpg',
      '../images/BasketballManager/PlayerStats.jpg',
      '../images/BasketballManager/Standings.jpg',
    ],
  },
  Website: {
    title: 'Website',
    info: [
      'This website right here.',
      "I decided to build it using HTML, CSS, and JavaScript since it needn't be very complex. This way I am not dependent on some framework to build a web application",
      'It helped improve a lot my skills in CSS.',
    ],
    used: ['HTML', 'CSS', 'JavaScript'],
  },
};

const openDropdown = (id) => {
  const project = projects[id];
  const container = document.getElementById('projects');
  const dropdown = document.getElementById('projectsDropdown');

  // Create dropdown header
  const header = document.createElement('div');
  header.classList.toggle('dropdown-header');

  // Create button to close dropdown
  const closeBtn = document.createElement('i');
  closeBtn.classList.add('fas', 'fa-times', 'fa-2x', 'close-dropdown-btn');
  closeBtn.addEventListener('click', closeDropdown);

  // Create header title
  const newH1 = document.createElement('h1');
  newH1.appendChild(document.createTextNode(project.title));

  // Add button and title to header
  header.append(newH1, closeBtn);

  // Create dropdown content
  const newDiv = document.createElement('div');
  newDiv.classList.toggle('dropdown-content');

  // Create project info element
  const info = document.createElement('div');
  project.info.forEach((p) => {
    const newP = document.createElement('p');
    newP.appendChild(document.createTextNode(p));
    info.append(newP);
  });

  // Add info to content
  newDiv.append(info);

  // Create and add link tag if it exists
  if (project.link) {
    const link = document.createElement('a');
    link.href = project.link;
    link.target = '_blank';
    link.innerText = 'Try it!';
    newDiv.append(link);
  }

  // Create technologies used list
  if (project.used) {
    const list = document.createElement('div');
    list.style.marginTop = '15px';
    const listTitle = document.createElement('p');
    listTitle.innerText = 'What I used:';
    listTitle.style.fontWeight = '550';
    const ul = document.createElement('ul');
    ul.classList.add('dropdown-content-list');
    project.used.forEach((t) => {
      const li = document.createElement('li');
      li.innerText = t;
      ul.append(li);
    });
    list.append(listTitle, ul);
    newDiv.append(list);
  }

  // Create images container
  if (project.images) {
    const container = document.createElement('div');
    container.classList.add('dropdown-content-images-container');
    project.images.forEach((i) => {
      const img = document.createElement('img');
      img.src = i;
      img.alt = i.split('/').pop().split('.')[0];
      img.addEventListener('click', openModal.bind(img));
      container.append(img);
    });
    newDiv.append(container);
  }

  // Clean dropdown if it was already open
  if (dropdown.style.display === 'block') dropdown.innerHTML = '';

  // Add header and content to dropdown and make it visible
  dropdown.append(header, newDiv);
  dropdown.style.display = 'block';

  const pageHeader = document.getElementsByTagName('header');
  const y = dropdown.offsetTop - pageHeader.item(0).clientHeight;
  window.scrollTo({ top: y, behavior: 'smooth' });
};

const closeDropdown = () => {
  const dropdown = document.getElementById('projectsDropdown');
  dropdown.style.display = 'none';
  dropdown.innerHTML = '';
};
