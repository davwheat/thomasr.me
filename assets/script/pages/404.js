const newURL = `https://github-pages.thomasr.me${location.pathname}`;

if (!location.pathname !== '/404.html') {
    const reqToCheck = new XMLHttpRequest();
    reqToCheck.open('GET', newURL, true);
    reqToCheck.onreadystatechange = function() {
        if (reqToCheck.readyState === 4) {
            if (reqToCheck.status === 404) {
                // it doesn't exist
            } else {
                document.getElementById('page-title').innerHTML = `This page has moved!`;
                document.getElementById('page-description').innerHTML = `You should be redirected shortly.`;
                document.getElementById('js-project-url').innerHTML = ` or <a href="${newURL}">here</a>`;
                window.location = newURL;
                // window.setTimeout(function(){window.location = newURL;}, 250);
            }
        }
    };
    reqToCheck.send();
}