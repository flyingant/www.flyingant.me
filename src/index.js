import '../assets/css/main.css';
import './styles/style.scss';
import $ from 'jquery';

$('.box').on('touchstart', () => {
  $('.piggy-walk').hide();
  $('.piggy-nibble').show();
});
$('.box').on('touchend', () => {
  $('.piggy-walk').show();
  $('.piggy-nibble').hide();
});

console.log(`
Wanna make a new friend or hire me? 
Shoot the message to %c'liucheng@flyingant.me'
`, 'color: red');
