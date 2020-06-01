const remote = require('electron').remote;


        
        var windowTopBar
        windowTopBar = document.createElement('div')
        windowTopBar.style.width = "100%"
        windowTopBar.style.height = "20px"
        windowTopBar.style.backgroundColor = "transparent"
        windowTopBar.style.position = "absolute"
        windowTopBar.style.top = windowTopBar.style.left = 0
        windowTopBar.style.webkitAppRegion = "drag"
         document.body.appendChild(windowTopBar)



function closewindow() {
    var window = remote.getCurrentWindow();
    window.close();
}

function minimize() {
    var window = remote.getCurrentWindow();
    window.minimize();
}