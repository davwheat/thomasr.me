

const colours = ['pink', 'bluel', 'blued', 'orange', 'green', 'red', 'purple'];

const linkElement = document.createElement('link');
linkElement.rel = 'stylesheet';
linkElement.href = `/assets/style/colours/${colours[colours.length * Math.random() | 0]}.css`;

if(localStorage.getItem('colours') !== "off") {
    document.head.appendChild(linkElement);
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