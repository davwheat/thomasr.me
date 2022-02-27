// most of this is all taken from the old site

const hash = window.location.hash;

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
  document.querySelector('aside#bi-bar').classList.add('bent');
  document.querySelector('link[rel="shortcut icon"]').href = '/img/twemoji-rainbow.png';
  document.title = 'lgbtq+ moment <3';  
}
//----------------------------------------------------------------------


//-----------page title-------------------------------------------------
if(window.location.pathname == '/' || !localStorage.visited) {
  document.getElementById('site-title').innerHTML = `
    Hello, I'm Tom! <img src="/assets/img/twemoji-peace.png" alt="Emoji peace sign">
  `;

  localStorage.setItem('visited', 'visited');
}
//----------------------------------------------------------------------
