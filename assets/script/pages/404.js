const newURL = `https://gh-pages.trobinson.me${location.pathname}`;


document.getElementById('js-project-url').innerHTML = `
    or <a href="${newURL}">this URL</a>
`;


const reqToCheck = new XMLHttpRequest();  
reqToCheck.open('GET', newURL, true);
reqToCheck.onreadystatechange = function(){
    if (reqToCheck.readyState === 4){
        if (reqToCheck.status === 404) {  
            // it doesn't exist
        } else {
            window.location = newURL;
        }
    }
};
reqToCheck.send();