const { app, BrowserWindow, Menu, nativeTheme  } = require('electron');

let mainWindow = null;
const createWindow = async () => {
    mainWindow = new BrowserWindow({
        width: 600,
        height: 900,
        minWidth: 375,
        minHeight: 600,
        icon: 'assets/images/icon.ico',
    });

    await mainWindow.loadFile('index.html');
};

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
})

nativeTheme.themeSource = "dark";
Menu.setApplicationMenu(Menu.buildFromTemplate([]));