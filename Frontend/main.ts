import { app, BrowserWindow, screen, ipcMain } from 'electron';
import * as path from 'path';
import * as url from 'url';

let main: BrowserWindow = null;
let entry: BrowserWindow = null;
const args = process.argv.slice(1),
  serve = args.some(val => val === '--serve');

function createWindows(): BrowserWindow {

  const electronScreen = screen;
  const size = electronScreen.getPrimaryDisplay().workAreaSize;
  
  //Create the Entry window
  entry = new BrowserWindow({
    height: 350,
    width: 350,
    frame: false,
    resizable:false,
    webPreferences: {
      nodeIntegration: true,
      allowRunningInsecureContent: (serve) ? true : false,
    }
  })
  // Create the Main window.
  main = new BrowserWindow({
    parent: entry,
    minWidth: size.width * 0.8,
    minHeight: size.height * 0.8,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      allowRunningInsecureContent: (serve) ? true : false,
    },
    show: false
  });
  if (serve) {

    // require('devtron').install();
    main.webContents.openDevTools();
    entry.webContents.openDevTools();

    require('electron-reload')(__dirname, {
      electron: require(`${__dirname}/node_modules/electron`)
    });
    entry.loadURL('http://localhost:4200/')
    main.loadURL('http://localhost:4200/home');
  } else {
    main.loadURL(url.format({
      pathname: path.join(__dirname, 'dist/index.html'),
      protocol: 'file:',
      slashes: true
    }));
  }

  ipcMain.handle('auth', (event, arg) => {
    if (arg == 200) {
      main.show();
      entry.hide();
    };
    if (arg == 400) {
      main.hide();
      entry.show();
    }
  })

  // Emitted when the window is closed.
  entry.on('closed', () => {
    // Dereference the window object, usually you would store window
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    entry = null;
  });

  return entry;
}

try {

  app.allowRendererProcessReuse = true;

  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  // Added 400 ms to fix the black background issue while using transparent window. More detais at https://github.com/electron/electron/issues/15947
  app.on('ready', () => setTimeout(createWindows, 400));

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (entry === null) {
      createWindows();
    }
  });

} catch (e) {
  console.log(e)
}
