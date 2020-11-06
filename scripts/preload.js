var images = [];
function preload() {
  for (var i = 0; i < arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}

const imagesPath = '../images/';

preload(
  imagesPath + 'AniMovies/Home.png',
  imagesPath + 'AniMovies/Search.png',
  imagesPath + 'AniMovies/Movie.png',
  imagesPath + 'BasketballManager/Home.jpg',
  imagesPath + 'BasketballManager/Dashboard.jpg',
  imagesPath + 'BasketballManager/Calendar.jpg',
  imagesPath + 'BasketballManager/Game.jpg',
  imagesPath + 'BasketballManager/Team.jpg',
  imagesPath + 'BasketballManager/Player.jpg',
  imagesPath + 'BasketballManager/Coaching.jpg',
  imagesPath + 'BasketballManager/Finances.jpg',
  imagesPath + 'BasketballManager/TeamStats.jpg',
  imagesPath + 'BasketballManager/PlayerStats.jpg',
  imagesPath + 'BasketballManager/Standings.jpg',
  imagesPath + 'CardMaker/Twitter.png',
  imagesPath + 'CardMaker/Genius.png',
  imagesPath + 'CardMaker/TwitterScreenshot.png',
  imagesPath + 'CardMaker/GeniusScreenshot.png'
);
