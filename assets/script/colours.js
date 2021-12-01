const colourNames = ['pink',    'bluel',   'blued',   'orange',  'green',   'red',     'purple',  'yellow'];
const colourCodes = ['#ff83a2', '#3dbbc6', '#3d76c6', '#c68d3d', '#3dc690', '#c6493d', '#663dc6', '#a9af26'];

if(localStorage.getItem('colours') !== 'off') {
    pickColour();
} else {
    document.getElementById('bw-button').href = 'javascript:enableColours()';
    document.getElementById('bw-button').innerHTML = '<i class="fas fa-fw fa-tint" aria-hidden="true"></i> go colourful';
}

function setColour(index) {
    let linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = `/assets/style/colours/${colourNames[index]}.css`;

    document.head.appendChild(linkElement);
    document.querySelector('meta[name="theme-color"]').content = colourCodes[index];

    localStorage.setItem('last-colour', colourNames[index]);

    window.setTimeout(function(){document.getElementById('og-stylesheet').remove();},250);
}

function pickColour() {
    let randIndex = colourNames.length * Math.random() | 0;

    if(localStorage.getItem('last-colour') == colourNames[randIndex]) {
        pickColour();
    } else {
        return setColour(randIndex);
    }
}

function disableColours() {
    localStorage.setItem('colours', 'off');
    document.getElementById('bw-button').href = 'javascript:enableColours()';
    document.getElementById('bw-button').innerHTML = '<i class="fas fa-fw fa-tint" aria-hidden="true"></i> go colourful';
    window.location.reload();
}

function enableColours() {
    localStorage.setItem('colours', 'on');
    document.getElementById('bw-button').href = 'javascript:disableColours()';
    document.getElementById('bw-button').innerHTML = '<i class="fas fa-fw fa-tint-slash" aria-hidden="true"></i> go neutral';
    window.location.reload();
}