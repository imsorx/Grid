"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var window_1 = require("./window");
var path = require("path");
var url = require("url");
var serve = process.argv.slice(1).some(function (val) { return val === '--serve'; });
var grid;
function main() {
    if (serve) {
        grid = new window_1.CreateWindow('http://localhost:4200/', 'http://localhost:4200#/home', true);
    }
    else {
        var _url = url.format({
            pathname: path.join(__dirname, 'dist/index.html'),
            protocol: 'file:',
            slashes: true
        });
        grid = new window_1.CreateWindow(_url, _url + '#/home');
    }
}
try {
    electron_1.app.allowRendererProcessReuse = true;
    // This method will be called when Electron has finished
    // initialization and is ready to create browser windows.
    // Some APIs can only be used after this event occurs.
    // Added 400 ms to fix the black background issue while using transparent window. More detais at https://github.com/electron/electron/issues/15947
    electron_1.app.on('ready', function () { return setTimeout(main, 400); });
    // Quit when all windows are closed.
    electron_1.app.on('window-all-closed', function () {
        // On OS X it is common for applications and their menu bar
        // to stay active until the user quits explicitly with Cmd + Q
        if (process.platform !== 'darwin') {
            electron_1.app.quit();
        }
    });
}
catch (e) {
    console.log(e);
}
//# sourceMappingURL=main.js.map