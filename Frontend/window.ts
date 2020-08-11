import { BrowserWindow, ipcMain } from 'electron';

//Configs
const entryCofig = {
    height: 360,
    width: 350,
    frame: false,
    resizable: false,
    show: false,
    icon: './src/assets/icons/favicon.ico'
}

const mainConfig = {
    minWidth: 800,
    minHeight: 600,
    frame: false,
    show: false
}


export class CreateWindow {

    EntryWindow: BrowserWindow;
    MainWindow: BrowserWindow;
    serve = null;

    constructor(entryURL: string, mainURL: string, serve?: boolean) {

        this.serve = serve;

        //Load entry window config
        this.EntryWindow = new BrowserWindow({
            ...entryCofig,
            webPreferences: {
                nodeIntegration: true,
                allowRunningInsecureContent: (this.serve) ? true : false,
            }
        });

        //Load URL
        this.EntryWindow.loadURL(entryURL);

        ipcMain.handle('auth', (_event, arg) => {
            if (arg == 200) {
                this.EntryWindow.hide();
                this.MainWindow = this.createMainWindow(mainURL);
                this.MainWindow.show();
            }
            if (arg == 400) {
                this.MainWindow.close();
                this.EntryWindow.show();
            }
        });

        if (serve) {
            require('electron-reload')(__dirname, {
                electron: require(`${__dirname}/node_modules/electron`)
            });
            this.EntryWindow.webContents.openDevTools();
        }
        this.EntryWindow.webContents.openDevTools();

        this.EntryWindow.once('ready-to-show', () => {
            this.EntryWindow.show()
        });
    }

    createMainWindow(url: string): BrowserWindow {
        var child = new BrowserWindow({
            ...mainConfig,
            webPreferences: {
                nodeIntegration: true,
                allowRunningInsecureContent: (this.serve) ? true : false
            }
        });
        child.loadURL(url);
        child.webContents.openDevTools();
        if (this.serve) {
            child.webContents.openDevTools();
        }
        child.on('close', () => {
            this.MainWindow = null
        });
        return child;
    }
}