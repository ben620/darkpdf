// preload.js
const {remote} = require('electron');
// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {


document.getElementById('close').addEventListener('click', closeWindow);
document.getElementById('minimize').addEventListener('click', minimizeWindow);
document.getElementById('maximize').addEventListener('click', maximizeWindow);


function closeWindow () {        
    var window = remote.getCurrentWindow();
    window.close();
}

function minimizeWindow () {   
    var window = remote.getCurrentWindow();
    window.minimize();
}

function maximizeWindow () {
    var window = remote.getCurrentWindow()
    window.isMaximized() ? window.unmaximize() : window.maximize();
}
  })
  