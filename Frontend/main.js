const { app, BrowserWindow, } = require('electron')

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 290,
    height: 550,
    resizable: true,
    frame: false,
    icon: __dirname + '/icon.ico',
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false
    }
  });
  mainWindow.loadURL('file:///' + __dirname + '/dist/index.html');

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

global.session = {
  user_id : null,
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
});