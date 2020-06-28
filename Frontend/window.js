"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
//Configs
var entryCofig = {
    height: 350,
    width: 350,
    frame: false,
    // resizable: false,
    show: false,
    icon: '/src/assets/icons/favicon.ico'
};
var mainConfig = {
    minWidth: 800,
    minHeight: 600,
    frame: false,
    show: false
};
var CreateWindow = /** @class */ (function () {
    function CreateWindow(entryURL, mainURL, serve) {
        var _this = this;
        this.serve = null;
        this.serve = serve;
        //Load entry window config
        this.EntryWindow = new electron_1.BrowserWindow(__assign(__assign({}, entryCofig), { webPreferences: {
                nodeIntegration: true,
                allowRunningInsecureContent: (this.serve) ? true : false,
            } }));
        //Load URL
        this.EntryWindow.loadURL(entryURL);
        electron_1.ipcMain.handle('auth', function (_event, arg) {
            if (arg == 200) {
                _this.EntryWindow.hide();
                _this.MainWindow = _this.createMainWindow(_this.EntryWindow, mainURL);
                _this.MainWindow.show();
            }
            if (arg == 400) {
                _this.MainWindow.close();
                _this.EntryWindow.show();
            }
        });
        if (serve) {
            require('electron-reload')(__dirname, {
                electron: require(__dirname + "/node_modules/electron")
            });
            this.EntryWindow.webContents.openDevTools();
        }
        this.EntryWindow.once('ready-to-show', function () {
            _this.EntryWindow.show();
        });
    }
    CreateWindow.prototype.createMainWindow = function (parent, url) {
        var _this = this;
        var child = new electron_1.BrowserWindow(__assign(__assign({}, mainConfig), { webPreferences: {
                nodeIntegration: true,
                allowRunningInsecureContent: (this.serve) ? true : false
            } }));
        child.loadURL(url);
        child.webContents.openDevTools();
        child.on('close', function () {
            _this.MainWindow = null;
        });
        return child;
    };
    return CreateWindow;
}());
exports.CreateWindow = CreateWindow;
//# sourceMappingURL=window.js.map