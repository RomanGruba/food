import './styles.css';
import './js/theme';
import Handlebars from 'handlebars/dist/handlebars';
import menu from './menu.json';
import menuItem from './templates/menu.hbs';


function menuMarkup(menu) {
  const markup = menu.map(Item => menuItem(Item)).join('');
  document.querySelector('#menu').insertAdjacentHTML('afterbegin', markup);
}

menuMarkup(menu);
