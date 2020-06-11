"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = require("path");
var url = require("url");
var win = null;
var entry = null;
var args = process.argv.slice(1), serve = args.some(function (val) { return val === '--serve'; });
function createWindows() {
    var electronScreen = electron_1.screen;
    var size = electronScreen.getPrimaryDisplay().workAreaSize;
    // Create the Main window.
    win = new electron_1.BrowserWindow({
        minWidth: size.width * 0.8,
        minHeight: size.height * 0.8,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            allowRunningInsecureContent: (serve) ? true : false,
        },
        show: false
    });
    //Create the Entry window
    entry = new electron_1.BrowserWindow({
        parent: win,
        height: 300,
        width: 500,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            allowRunningInsecureContent: (serve) ? true : false,
        }
    });
    if (serve) {
        // require('devtron').install();
        win.webContents.openDevTools();
        entry.webContents.openDevTools();
        require('electron-reload')(__dirname, {
            electron: require(__dirname + "/node_modules/electron")
        });
        entry.loadURL('http://localhost:4200/entry');
        win.loadURL('http://localhost:4200');
    }
    else {
        win.loadURL(url.format({
            pathname: path.join(__dirname, 'dist/index.html'),
            protocol: 'file:',
            slashes: true
        }));
    }
    electron_1.ipcMain.handle('auth', function (event, arg) {
        if (arg == 200) {
            win.show();
            entry.hide();
        }
        ;
        if (arg == 400) {
            win.hide();
            entry.show();
        }
    });
    // Emitted when the window is closed.
    win.on('closed', function () {
        // Dereference the window object, usually you would store window
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null;
    });
    return win;
}
try {
    electron_1.app.allowRendererProcessReuse = true;
    // This method will be called when Electron has finished
    // initialization and is ready to create browser windows.
    // Some APIs can only be used after this event occurs.
    // Added 400 ms to fix the black background issue while using transparent window. More detais at https://github.com/electron/electron/issues/15947
    electron_1.app.on('ready', function () { return setTimeout(createWindows, 400); });
    // Quit when all windows are closed.
    electron_1.app.on('window-all-closed', function () {
        // On OS X it is common for applications and their menu bar
        // to stay active until the user quits explicitly with Cmd + Q
        if (process.platform !== 'darwin') {
            electron_1.app.quit();
        }
    });
    electron_1.app.on('activate', function () {
        // On OS X it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (win === null) {
            createWindows();
        }
    });
}
catch (e) {
    console.log(e);
}
//# sourceMappingURL=main.js.map