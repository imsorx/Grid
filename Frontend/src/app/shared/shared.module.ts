import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { UserComponent, TopbarComponent, MessageComponent, SendboxComponent } from './components/';
import { WebviewDirective } from './directives/';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    WebviewDirective,
    UserComponent,
    TopbarComponent,
    MessageComponent,
    SendboxComponent
  ],
  imports: [CommonModule, TranslateModule, FormsModule],
  exports: [
    TranslateModule,
    WebviewDirective,
    FormsModule,
    UserComponent,
    TopbarComponent,
    MessageComponent,
    SendboxComponent
  ]
})
export class SharedModule { }
