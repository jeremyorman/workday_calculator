const {app, BrowserWindow, Menu} = require('electron');

let win;

process.env.NODE_ENV = 'development';

// process.env.NODE_ENV = 'production'

function createWindow() {
    win = new BrowserWindow({
        width: 500,
        height: 400,
        webPreferences: {
            nodeIntegration: true
        }
    });
    
    win.loadFile('index.html');
    
    win.on('closed', () => {
        win = null
    })
}

app.on('ready', () => {
    createWindow();
    if (process.env.NODE_ENV === 'production') {
        Menu.setApplicationMenu(null)
    }
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
});