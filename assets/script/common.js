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


//-----------footer message---------------------------------------------
if(hash.replace('#','').includes('tomr')) {
  if(!localStorage.tomr) {
    const TomRmessage = document.createElement('p');
    TomRmessage.classList.add('smol');
    TomRmessage.innerHTML = `
      <br>Looks like you came here from TomR.me! <a href="/hello-from/tomr">What does that mean</a>?
    `;

    document.querySelector('footer').appendChild(TomRmessage);
    localStorage.setItem('tomr', 'shown');
  }
}
//----------------------------------------------------------------------
