import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitlebarComponent, ToastComponent } from './components';
import { WebviewDirective, LoadImgDirective } from './directives';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoadImgDirective,
    WebviewDirective,
    TitlebarComponent,
    ToastComponent
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    WebviewDirective,
    LoadImgDirective,
    FormsModule,
    TitlebarComponent,
    ToastComponent
  ]
})
export class SharedModule { }
