import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitlebarComponent } from './components';
import { WebviewDirective } from './directives';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    WebviewDirective,
    TitlebarComponent
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    WebviewDirective,
    FormsModule,
    TitlebarComponent
  ]
})
export class SharedModule { }
