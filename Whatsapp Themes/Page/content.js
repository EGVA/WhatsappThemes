    GetThemeFile('Base');    

    function UpdatethemeFile(themeFile){        
        setProp('--background-default', themeFile.Header.backgroundColor) // Backgorund color of the chatlist and some other things
        setProp('--background-default-active', themeFile.Header.backgroundColorHover) //  Backgorund color of the chatlist and some other things while selected
        setProp('--background-default-hover', themeFile.Header.backgroundColorActive) //  Backgorund color of the chatlist and some other things while hover
        setProp('--panel-background-lighter', themeFile.Header.backgroundColorLighter) //  Backgorund color of the chatlist and some other things but lighter
        
        setProp('--dropdown-background', themeFile.Global.dropdownsBackground) // Dropdown menus background
        setProp('--dropdown-background-hover', themeFile.Global.dropdownsBackgroundHover) // Dropdown menus background
    
        //#region fonts
        setProp('--primary-title', themeFile.Global.Fonts.primaryTitle)
        setProp('--primary-strong', themeFile.Global.Fonts.primaryStrong)
        setProp('--primary-stronger', themeFile.Global.Fonts.primaryStronger)
        setProp('--secondary-stronger', themeFile.Global.Fonts.secondary)
        setProp('--secondary', themeFile.Global.Fonts.secondaryStrong)
        setProp('--primary', themeFile.Global.Fonts.secondaryStronger)
        ////#endregion fonts
    
        //#region intro
        setProp('--intro-background', themeFile.Intro.background)
        //#endregion
    
        //#region header
        setProp('--panel-header-background', themeFile.Menus.panelBackground) // Header background color 
        setProp('--panel-header-icon', themeFile.Menus.icons) // The icons of the header
        //#endregion
    
        //#region Chatlist
        setProp('--icon-lighter', themeFile.Chatlist.icons) // Mute icon
        setProp('--secondary-lighter', themeFile.Chatlist.Fonts.secondaryLighter) 
        setProp('--chatlist-icon', themeFile.Chatlist.icons) // Some preview message icons
        setProp('--unread-marker-background', themeFile.Chatlist.unreadMessageCounterBackground) // The unread message counter background
        setProp('--unread-marker-text', themeFile.Chatlist.unreadMessageCounterText) // The unread message counter font
    
        //#region Butter bar
        setProp('--butterbar-default-background', themeFile.Chatlist.butterbar.background)
        setProp('--butterbar-primary', themeFile.Chatlist.butterbar.primary)
        setProp('--butterbar-secondary', themeFile.Chatlist.butterbar.secondary)
        setProp('--butterbar-icon', themeFile.Chatlist.butterbar.icons)
        //#endregion   
        //#endregion
    
        //#region 
        setProp('--panel-background-colored', themeFile.Menus.panelBackground) // Color of top header inside a configuration menu
        setProp('--drawer-background', themeFile.Menus.drawerBackground) // The background of the menu citted in above commentary
        setProp('--drawer-section-background', themeFile.Menus.drawerSection) // The secondary background of the menu citted in above commentary
        ////#endregion
    
        //#region Chat
        setProp('--outgoing-background', themeFile.Chat.outgoing.messageBackground); // Message background
        setProp('--outgoing-background-deeper', themeFile.Chat.outgoing.messageDeeper); // The reply background
        setProp('--outgoing-background-rgb', themeFile.Chat.outgoing.messageRGB); // IDK
        setProp('--outgoing-primary', themeFile.Chat.outgoing.font); // Font
    
        setProp('--incoming-background', themeFile.Chat.incoming.messageBackground);  // Message background
        setProp('--incoming-background-deeper', themeFile.Chat.incoming.messageDeeper); // A deeper background colour
        setProp('--incoming-background-rgb', themeFile.Chat.incoming.messageRGB); // IDK
        setProp('--incoming-primary', themeFile.Chat.incoming.font); // Font
        
    
        setProp('--audio-progress-played', themeFile.Chat.audioProgressIndicator); // Audio progress icon indicator
        setProp('--audio-progress-played-incoming', themeFile.Chat.audioProgressIndicatorWhileAudioPlaying); // Audio progress icon indicator while playing
    
        setProp('--icon-strong-rgb', themeFile.Chat.playbackButtons); // Playback icon
        setProp('--ptt-green', themeFile.Chat.icons); // Microfone icon
        
        setProp('--system-message-background', themeFile.Chat.dayIndicatorBackground); // The day of message indicator background
        setProp('--system-message-text', themeFile.Chat.dayIndicatorText); // The day of message indicator text
    
        setProp('--bubble-meta', themeFile.Chat.messageTime); // Message time
    
        // Visualized indicator
        setProp('--icon-ack', themeFile.Chat.checkmarkVizualised); // visualized checkmark
        setProp('--bubble-meta-icon', themeFile.Chat.checkmarkNotVizualised); // 1 and 2 checkmarks not visualized
    
        // Message input
        setProp('--compose-background', themeFile.Chat.input.compose) // Basicaly the background of message input
        setProp('--input-placeholder', themeFile.Chat.input.placeholder) // Basicaly the colour of placeholder from input
    
        setProp('--rich-text-panel-background', themeFile.Chat.input.richTextPanelBackground); // The background of the divs who input is
        setProp('--panel-background-deep', themeFile.Chat.input.backgroundDeep); // The colour behind of input placeholder
        setProp('--panel-background-deeper', themeFile.Chat.input.backgroundDeep); // The colour behind of input placeholder while sharing files/imgs
    
        setProp('--icon', themeFile.Chat.icons); // Downpart icons
    
        setProp('--icon-fixed', themeFile.Menus.icons) // Icons from menus
        setProp('--panel-primary', themeFile.Menus.primary); // IDK 
        //#endregion
    }

     function GetThemeFile(themeFileName){
        const url = chrome.runtime.getURL('../Themes/' + themeFileName + '.json');
        fetch(url)
            .then((response) => response.json()) //assuming file contains json
            .then((json) => UpdatethemeFile(json));
    
    }

    function setProp(variable ,value){
        document.querySelector(":root").style.setProperty(variable,value);
    }