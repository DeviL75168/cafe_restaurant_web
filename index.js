const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

let mainWindow;

app.on('ready', () => {
    Menu.setApplicationMenu(null);

    mainWindow = new BrowserWindow({
        width: 1200, 
        height: 800, 
        icon: path.join(__dirname, 'icons/app.ico'), 
        webPreferences: {
            contextIsolation: true, 
        },
        frame: true, 
        titleBarStyle: 'default',
    });

    mainWindow.loadFile('index.html');

});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit(); 
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow(); 
    }
});

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        icon: path.join(__dirname, 'icons/app.ico'),
        webPreferences: {
            contextIsolation: true, 
        },
        frame: true,
        titleBarStyle: 'default', 
    });
    mainWindow.loadFile('index.html');
}