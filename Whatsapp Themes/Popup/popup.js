GetThemeFile('ThemesRegister'); 

let themeDiv = document.getElementById("Themes");

function GetThemeFile(themeFileName){
    const url = chrome.runtime.getURL('../Themes/' + themeFileName + '.json');
    fetch(url)
        .then((response) => response.json()) //assuming file contains json
        .then((json) => LoadRegister(json))
}

function LoadRegister(registerFile){
    let themesType;

    themesType = registerFile.DevThemes

    var title = document.createElement("h2");
    var text = document.createTextNode("Themes");
    title.appendChild(text);
    themeDiv.appendChild(title);

    themesType.forEach((element) => {
        var button = document.createElement("button");
        var node = document.createTextNode(element);
        button.appendChild(node);

        themeDiv.appendChild(button);
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