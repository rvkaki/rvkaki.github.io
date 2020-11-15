function toggleNav() {
  const sideNav = document.getElementById('mySidenav');
  const btn = document.getElementById('sidenav-btn');
  sideNav.classList.toggle('open');
  btn.classList.toggle('clicked')
  btn.classList.toggle('fa-bars');
  btn.classList.toggle('fa-times');
}
