GetThemeFile('ThemesRegister');    

var themeToLoad = "dev";

var DevButton = document.querySelector("#Dev");
var userButton = document.querySelector("#User");

Dev.addEventListener('click', () => {
    GetThemeFile("ThemesRegister")
    themeToLoad = "dev"
})
User.addEventListener('click', () => { 
    GetThemeFile("ThemesRegister")
    themeToLoad = "user"
})

function GetThemeFile(themeFileName){
    const url = chrome.runtime.getURL('../Themes/' + themeFileName + '.json');
    fetch(url)
        .then((response) => response.json()) //assuming file contains json
        .then((json) => LoadRegister(json))
}

function LoadRegister(registerFile){
    let div = document.getElementById("Themes");
    let themesType;

    if(themeToLoad == "dev")
        themesType = registerFile.DevThemes
    else if (themeToLoad == "user")
        themesType = registerFile.UserThemes

    div.innerHTML = "";

    themesType.forEach((element) => {
        var button = document.createElement("button");
        var node = document.createTextNode(element);
        button.appendChild(node);

        div.appendChild(button);
        button.addEventListener('click', function(){RequirePageThemeSwitch(element)});
    });
}

function RequirePageThemeSwitch(theme){
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {themeResponse: theme}, function(response) {
          console.log(response.farewell);
        });
      });
}