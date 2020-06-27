import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitlebarComponent,AlertComopnent } from './components';
import { WebviewDirective } from './directives';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    WebviewDirective,
    TitlebarComponent,
    AlertComopnent
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    WebviewDirective,
    FormsModule,
    TitlebarComponent,
    AlertComopnent
  ]
})
export class SharedModule { }
