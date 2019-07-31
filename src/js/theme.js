const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitch = document.querySelector('#theme-switch-control');

themeSwitch.addEventListener('change', e => {
  if (themeSwitch.checked) {
    document.querySelector('body').classList.add(Theme.DARK);
    document.querySelector('body').classList.remove(Theme.LIGHT);
  } else {
    document.querySelector('body').classList.add(Theme.LIGHT);
    document.querySelector('body').classList.remove(Theme.DARK);
  }
  localStorage.setItem(
    'theme',
    document.querySelector('body').getAttribute('class'),
  );
});

if (
  localStorage.getItem('theme') === 'dark-theme' &&
  document.querySelector('body').getAttribute('class') !== Theme.DARK
) {
  document.querySelector('body').classList.add(Theme.DARK);
  document.querySelector('body').classList.remove(Theme.LIGHT);
  themeSwitch.setAttribute('checked', true);
  console.log(themeSwitch.checked);
}
