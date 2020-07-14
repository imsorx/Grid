import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitlebarComponent, ToastComponent, SettingsComponent } from './components';
import { WebviewDirective, LoadImgDirective } from './directives';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoadImgDirective,
    WebviewDirective,
    TitlebarComponent,
    SettingsComponent,
    ToastComponent
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    WebviewDirective,
    LoadImgDirective,
    FormsModule,
    TitlebarComponent,
    SettingsComponent,
    ToastComponent
  ]
})
export class SharedModule { }
