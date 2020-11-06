const theme = localStorage.getItem('theme');
const body = document.body;

if (theme) body.classList.add(theme);

const toggleDarkMode = (checked) => {
  const body = document.body;

  if (checked) {
    body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
  }
};
