import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Titlebar, Color } from 'custom-electron-titlebar';

import { AppModule } from './app/app.module';
import { AppConfig } from './environments/environment';

if (AppConfig.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    preserveWhitespaces: false
  })
  .catch(err => console.error(err));

new Titlebar({
  backgroundColor: Color.fromHex('#ECECEC'),
  icon:'assets/icons/favicon.ico',
  menu:null,
  titleHorizontalAlignment:'left'
});