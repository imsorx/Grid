import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitlebarComponent, AlertComopnent, SettingsComponent } from './components';
import { WebviewDirective, LoadImgDirective } from './directives';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoadImgDirective,
    WebviewDirective,
    TitlebarComponent,
    SettingsComponent,
    AlertComopnent
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    WebviewDirective,
    LoadImgDirective,
    FormsModule,
    TitlebarComponent,
    AlertComopnent,
    SettingsComponent
  ]
})
export class SharedModule { }
