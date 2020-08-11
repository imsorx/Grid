import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EntryComponent } from './entry.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    EntryComponent
  ],
  imports: [CommonModule, FormsModule, SharedModule],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    EntryComponent
  ]
})
export class EntryModule { }
