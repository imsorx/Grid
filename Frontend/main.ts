import { app, BrowserWindow } from 'electron';
import { CreateWindow } from './window';
import * as path from 'path';
import * as url from 'url';


const serve = process.argv.slice(1).some(val => val === '--serve');
let grid: CreateWindow;

function main() {

  if (serve) {
    grid = new CreateWindow('http://localhost:4200/', 'http://localhost:4200#/home', true);
  } else {
    let _url = url.format({
      pathname: path.join(__dirname, 'dist/index.html'),
      protocol: 'file:',
      slashes: true
    });
    grid = new CreateWindow(_url, _url + '#/home');
  }

}

try {

  app.allowRendererProcessReuse = true;

  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  // Added 400 ms to fix the black background issue while using transparent window. More detais at https://github.com/electron/electron/issues/15947
  app.on('ready', () => setTimeout(main, 400));

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

} catch (e) {
  console.log(e)
}
