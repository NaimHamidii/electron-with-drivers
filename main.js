const { app, BrowserWindow } = require('electron');

function createWindow(){
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
            // contextIsolation: true,
            // preload: path.join(__dirname, 'preload.js'),
        },
    });

    win.loadFile('index.html');

    win.webContents.openDevTools();
}

app.whenReady()
    .then(() => {
        createWindow()
    });