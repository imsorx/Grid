import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { EntryComponent } from './entry.component';

@NgModule({
  declarations: [
    EntryComponent
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    FormsModule,
    EntryComponent
  ]
})
export class EntryModule { }