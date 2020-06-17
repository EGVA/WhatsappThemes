import {Theme} from '../Page/content.js'

//new Theme('','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','')

const url = chrome.runtime.getURL('../Themes/Teste.json');

fetch(url)
    .then((response) => response.json()) //assuming file contains json
    .then((json) => console.log(json));

let theme = new Theme('a','b','c','d','e','f','e','f','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g','g')

localStorage.setItem('TEMATESTE', theme)

export function GetThemeFile(themeName){
    const url = chrome.runtime.getURL('../Themes/' + themeName + '.json');
    let jjson;
    fetch(url)
        .then((response) => response.json()) //assuming file contains json
        .then((json) => jjson = json);

        return jjson;
}