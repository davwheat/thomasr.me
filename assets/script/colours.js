const colourNames = ['pink', 'bluel', 'blued', 'orange', 'green', 'red', 'purple'];
const colourCodes = ['#ff83a2', '#3dbbc6', '#3d76c6', '#c68d3d', '#3dc690', '#c6493d', '#ff83a2'];

const linkElement = document.createElement('link');
const randIndex = colours.length * Math.random() | 0;

linkElement.rel = 'stylesheet';
linkElement.href = `/assets/style/colours/${colours[randIndex]}.css`;

if(localStorage.getItem('colours') !== "off") {
    document.head.appendChild(linkElement);
    document.querySelector('meta[name="theme-color"]').content = colourCodes[randIndex];
    document.getElementById('og-stylesheet').remove();
} else {
    document.getElementById('bw-button').href = 'javascript:enableColours()';
    document.getElementById('bw-button').innerHTML = '<i class="fas fa-fw fa-tint" aria-hidden="true"></i> go colourful';
}

function disableColours() {
    localStorage.setItem('colours', "off");
    document.getElementById('bw-button').href = 'javascript:enableColours()';
    document.getElementById('bw-button').innerHTML = '<i class="fas fa-fw fa-tint" aria-hidden="true"></i> go colourful';
    window.location.reload();
}

function enableColours() {
    localStorage.setItem('colours', "on");
    document.getElementById('bw-button').href = 'javascript:disableColours()';
    document.getElementById('bw-button').innerHTML = '<i class="fas fa-fw fa-tint-slash" aria-hidden="true"></i> go neutral';
    window.location.reload();
}