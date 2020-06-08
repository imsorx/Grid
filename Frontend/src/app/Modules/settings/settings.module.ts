import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { SettingsComponent } from './settings.component';

@NgModule({
    declarations: [
        SettingsComponent
    ],
    imports: [CommonModule, FormsModule],
    exports: [
        FormsModule,
        SettingsComponent
    ],
})
export class SettingsModule { }