import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TitlebarComponent, ToastComponent, SettingsComponent } from './components';
import { WebviewDirective, LoadImgDirective } from './directives';
import { FilterPipe } from './pipes/filter.pipe'

@NgModule({
  declarations: [
    LoadImgDirective,
    WebviewDirective,
    TitlebarComponent,
    SettingsComponent,
    ToastComponent,
    FilterPipe
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    WebviewDirective,
    LoadImgDirective,
    FormsModule,
    TitlebarComponent,
    SettingsComponent,
    ToastComponent,
    FilterPipe
  ]
})
export class SharedModule { }
