const colours = ['pink', 'bluel', 'blued', 'orange', 'green', 'red', 'purple'];

const linkElement = document.createElement('link');
linkElement.rel = 'stylesheet';
linkElement.href = `/assets/style/colours/${colours[colours.length * Math.random() | 0]}.css`;

document.head.appendChild(linkElement);
document.getElementById('og-stylesheet').remove();