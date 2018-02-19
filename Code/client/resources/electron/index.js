const { app, Tray, BrowserWindow, Menu, shell, globalShortcut } = require('electron');
const url = require('url');
const path = require('path');

let mainWindow;
let tray;
const createWindow = () => {
    const options = {
        title: 'BASTA! 2018 Spring WS',
        height: 900,
        width: 1440,
    };
    const mainWindowUrl = url.format({
        pathname: path.join(__dirname, 'web', 'index.html'),
        protocol: 'file:',
        slashes: true,
    });
    globalShortcut.register('CmdOrCtrl+Shift+D', () => {
        mainWindow.webContents.toggleDevTools();
    });
    mainWindow = new BrowserWindow(options);
    mainWindow.loadURL(mainWindowUrl);
};

const createTray = () => {
    tray = new Tray(path.join(__dirname, 'icon.png'));
    const contextMenu = Menu.buildFromTemplate([
        {
            label: 'Show Repository',
            type: 'radio',
            click: () => {
                shell.openExternal('https://github.com/thinktecture/basta-spring-2018-mba-ws');
            },
        },
    ]);
    tray.setToolTip('This is my application.');
    tray.setContextMenu(contextMenu);
};

app.on('ready', () => {
    createWindow();
    createTray();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        mainWindow = null;
    } else {
        app.quit();
    }
});
