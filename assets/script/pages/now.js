---
---
{% if jekyll.environment == 'production' %}
    const lanyardURL = '/lanyard/';
{% else %}
    const lanyardURL = 'https://api.lanyard.rest/v1/users/101588913746890752';
{% endif %}

let nowPage = window.location.pathname.toLowerCase().includes('now') ? true : false;

try {
    getNowData();
} catch (e) {
    console.error(e);
}

async function getNowData() {
    const now = await fetch(lanyardURL);
    let n = await now.json();

    if(!n.success) { out.innerHTML = 'Something went wrong'; console.log(n); return; }
    n = n.data;

    if(nowPage) {
        let out = document.getElementById('js-now');
        let list = '<ul id="now-list">';

        if(n.listening_to_spotify) {
            list += `
            <li>
                <img src="${n.spotify.album_art_url}">
                <div>
                    <!--<h2>Listening To</h2>-->
                    <h3>${n.spotify.song}</h3>
                    <p><b>${n.spotify.artist}</b>, ${n.spotify.album}</p>
                </div>
            </li>`;
        } else {
            list += `
            <li>
                <div>
                    <h2>Listening To</h2>
                    <h3>Not listening to Spotify</h3>
                    <p>Check my Last.fm linked below!</p>
                </div>
            </li>`;
        }
    
        // if (n.activities) {
        //     for(let a of n.activities) {
        //         if(a.name.toLowerCase() == 'spotify') continue;
    
        //         let largeImg, smallImg, largeText, smallText;
        //         largeImg = smallImg = largeText = smallText = '';
        //         if(a.assets) {
        //             largeImg = a.assets.large_image ? `<img src="https://cdn.discordapp.com/app-assets/${a.application_id}/${a.assets.large_image}.png"></img>` : '';
        //             smallImg = a.assets.small_image ? `<img src="https://cdn.discordapp.com/app-assets/${a.application_id}/${a.assets.small_image}.png"></img>` : '';
                
        //             largeText = a.assets.large_text ? a.assets.large_text : '';
        //             smallText = a.assets.small_text ? a.assets.small_text : ''; 
        //         }
    
        //         list += `
        //         <li><h2>${a.name}</h2>
        //             ${largeImg}${smallImg}
        //             <b>${a.state ? a.state : ''}</b>, <b>${a.details ? a.details : ''}</b><br>${smallText}, ${largeText}
        //         </li>`
        //     }
        // }
        
    
        out.innerHTML = list + '</ul>';
        window.setTimeout(getNowData, 5000);
    } else {
        if(n.listening_to_spotify) {
            document.getElementById('js-lanyard').innerHTML = `
                <a href="/now" title="Listening to ${n.spotify.song} by ${n.spotify.artist} on ${n.spotify.album}">
                    <i class="fas fa-fw fa-headphones-alt" aria-hidden="true"></i>
                    <span class="fa-sr-only">Now Page</span>
                </a>
            `;
        }
    }

}