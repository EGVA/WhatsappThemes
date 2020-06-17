     function Theme ( 
        unreadMessageCounterBackground_,
        unreadMessageCounterText_,
        mainBackgroundColour_,
        mainBackgroundColourHover_,
        mainBackgroundColourLighter_,
    
        dropdownBackground_,
        dropdownBackgroundHover_,
    
        mainFont_,
        lightMainFont_,
       
        introBackground_,
       
        headerColour_,
        headerIcons_,
        avatarOutlines_,
       
        icons_,
       
        confgMenuBackground_,
        confgMenuHeader_,
    
        butterbarBackground_,
        butterBarIcon_,
        butterBarFont_,
       
        outgoingMessageBackground_,
        outgoingMessageBackgroundDeeper_,
        incomingMessageBackground_,
        incomingMessageBackgroundDeeper_,
        audioProgress_,
        audioProgressWhilePlayed_,
        playbackIcons_,
        microphone_,
        messageTime_,
        dayIndicatorBackground_,
        dayIndicatorText_,
       
        visualizedCheckmark_,
        notVisealizedCheckmark_,
       
        inputFieldBackground_,
        inputPlaceholder_,
        inputBackground_,
        inputBackgroundDeep_
        )
        {
            this.unreadMessageCounterBackground = unreadMessageCounterBackground_
            this.unreadMessageCounterText = unreadMessageCounterText_
        
            this.mainBackgroundColour = mainBackgroundColour_
            this.mainBackgroundColourHover = mainBackgroundColourHover_
            this.mainBackgroundColourLighter = mainBackgroundColourLighter_
            this.unreadMessageCounterText = unreadMessageCounterText_

            this.dropdownBackground = dropdownBackground_
            this.dropdownBackgroundHover = dropdownBackgroundHover_
            this.butterbarBackground = butterbarBackground_
            this.butterBarFont = butterBarFont_
            this.microphone = microphone_
        
             this.mainFont = mainFont_
             this.lightMainFont = lightMainFont_
            
             this.introBackground = introBackground_
            
             this.headerColour = headerColour_
             this.headerIcons = headerIcons_
             this.avatarOutlines = avatarOutlines_
            
             this.icons = icons_
            
             this.confgMenuBackground = confgMenuBackground_
             this.confgMenuHeader = confgMenuHeader_
            
             this.outgoingMessageBackground = outgoingMessageBackground_
             this.outgoingMessageBackgroundDeeper = outgoingMessageBackgroundDeeper_
             this.incomingMessageBackground = incomingMessageBackground_
             this.incomingMessageBackgroundDeeper = incomingMessageBackgroundDeeper_
             this.audioProgress = audioProgress_
             this.audioProgressWhilePlayed = audioProgressWhilePlayed_
             this.playbackIcons = playbackIcons_
             this.messageTime = messageTime_
             this.dayIndicatorBackground = dayIndicatorBackground_
             this.dayIndicatorText = dayIndicatorText_
            
             this.visualizedCheckmark = visualizedCheckmark_
             this.notVisealizedCheckmark = notVisealizedCheckmark_
            
             this.inputFieldBackground = inputFieldBackground_
             this.inputPlaceholder = inputPlaceholder_
             this.inputBackground = inputBackground_
             this.inputBackgroundDeep = inputBackgroundDeep_
    }

    GetThemeFile('Teste');    

    function UpdateTheme(theme){
        setProp('--unread-marker-background', theme.unreadMessageCounterBackground) // The unread message counter background
        setProp('--unread-marker-text', theme.unreadMessageCounterText) // The unread message counter font

        setProp('--background-default', theme.mainBackgroundColour) // Backgorund color of the chatlist and some other things
        setProp('--background-default-active', theme.mainBackgroundColourHover) //  Backgorund color of the chatlist and some other things while hover
        setProp('--panel-background-lighter', theme.mainBackgroundColourLighter) //  Backgorund color of the chatlist and some other things but lighter
    
        //#region fonts
        setProp('--primary-title', theme.mainFont)
        setProp('--primary-strong', theme.mainFont)
        setProp('--primary-stronger', theme.mainFont)
        setProp('--secondary-stronger', theme.mainFont)
        setProp('--secondary', theme.mainFont)
        setProp('--primary', theme.mainFont)
        ////#endregion fonts
    
        //#region intro
        setProp('--intro-background', theme.introBackground)
        //#endregion
    
        //#region header
        setProp('--panel-header-background', theme.headerColour) // Header background color 
        setProp('--panel-header-icon', theme.headerIcons) // The icons of the header
        setProp('--avatar-background', theme.avatarOutlines) // THe outline of every avatar
        //#endregion
    
        //#region Chatlist
        setProp('--icon-lighter', theme.icons) // Mute icon
        setProp('--secondary-lighter', theme.lightMainFont) 
        setProp('--chatlist-icon', theme.icons) // Some preview message icons
        setProp('--dropdown-background', theme.dropdownBackground) // Dropdown menus background
        setProp('--dropdown-background-hover', theme.dropdownBackgroundHover) // Dropdown menus background
    
        //#region Butter bar
        setProp('--butterbar-default-background', theme.butterbarBackground)
        setProp('--butterbar-primary', theme.butterBarFont)
        setProp('--butterbar-secondary', theme.butterBarFont)
        setProp('--butterbar-icon', theme.icons)
        //#endregion   
        //#endregion
    
        //#region 
        setProp('--panel-background-colored', theme.dropdownBackground) // Color of top header when open a configuration menu
        setProp('--drawer-background', theme.dropdownBackground) // The background of the menu citted in above commentary
        setProp('--drawer-section-background', theme.dropdownBackground) // The background of the menu citted in above commentary
        ////#endregion
    
        //#region Chat
        setProp('--outgoing-background', theme.outgoingMessageBackground); // Message background
        setProp('--outgoing-background-deeper', theme.outgoingMessageBackgroundDeeper); // The reply background
        setProp('--outgoing-background-rgb', '#DC5447'); // IDK
        setProp('--outgoing-primary', '#fdf4cb'); // IDK
    
        setProp('--incoming-background', theme.incomingMessageBackground);  // Message background
        setProp('--incoming-background-deeper', theme.incomingMessageBackgroundDeeper); // A deeper background colour
        setProp('--incoming-background-rgb', '#DC5447'); // IDK
        setProp('--incoming-primary', '#fdf4cb'); // IDK
    
        setProp('--audio-progress-played', theme.audioProgress); // Audio progress icon indicator
        setProp('--audio-progress-played-incoming', theme.audioProgressWhilePlayed); // Audio progress icon indicator while playing
    
        setProp('--icon-strong-rgb', theme.playbackIcons); // Playback icon
        setProp('--ptt-green', theme.microphone); // Microfone icon
        
        setProp('--system-message-background', theme.dayIndicatorBackground); // The day of message indicator background
        setProp('--system-message-text', theme.dayIndicatorText); // The day of message indicator text
    
        setProp('--bubble-meta', theme.messageTime); // Message time
    
        // Visualized indicator
        setProp('--icon-ack', theme.visualizedCheckmark); // visualized checkmark
        setProp('--bubble-meta-icon', theme.notVisealizedCheckmark); // 1 and 2 checkmarks not visualized
    
        // Message input
        setProp('--compose-background', '#80D1B2') // Basicaly the background of message input
        setProp('--input-placeholder', theme.inputPlaceholder) // Basicaly the colour of placeholder from input
    
        setProp('--rich-text-panel-background', theme.inputBackground); // The background of the divs who input is
        setProp('--panel-background-deep', theme.inputBackgroundDeep); // The colour behing of input placeholder
    
        setProp('--icon', theme.icons); // Downpart icons
    
        setProp('--icon-fixed', theme.icons) // Icons from menus
        setProp('--panel-primary', 'blue'); // IDK
        //#endregion
    }

     function GetThemeFile(themeName){
        const url = chrome.runtime.getURL('../Themes/' + themeName + '.json');
        let jjson;
        fetch(url)
            .then((response) => response.json()) //assuming file contains json
            .then((json) => UpdateTheme(json));
    
    }
    
    //#region  UTIL FUNCTIONS 
    function getQ(value){
        return document.querySelector(value);
    }
    function setProp(variable ,value){
        getQ(':root').style.setProperty(variable,value);
    }

    //#endregion