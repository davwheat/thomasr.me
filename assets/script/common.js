// this is all taken from the old site


//-----------contact alert box------------------------------------------
if(hash === '#contact') window.location = '/about';
//----------------------------------------------------------------------

//-----------konami code------------------------------------------------
// https://twitter.com/dangeredwolf/status/1412113081371660290
let pressedKeys = '';
document.addEventListener('keydown', e => {
  pressedKeys += e.code;
  if (pressedKeys == "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightKeyBKeyA") konami();
});

function konami() {
  document.querySelector('aside#topbar').classList.add('bent');
  document.querySelector('link[rel="shortcut icon"]').href = '/img/twemoji-rainbow.png';
  document.title = 'lgbtq+ moment <3';  
}
//----------------------------------------------------------------------
