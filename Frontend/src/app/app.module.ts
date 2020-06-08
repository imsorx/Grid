import 'reflect-metadata';
import '../polyfills';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

//Modules
import { SharedModule } from './shared/shared.module';
import { EntryModule } from './Modules/Entry/entry.module';
import { HomeModule } from './Modules/Home/home.module';
import { SettingsModule } from './Modules/settings/settings.module';

//Route
import { AppRoutingModule } from './app-routing.module';

//Root Component
import { AppComponent } from './app.component';

//Services

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    SharedModule,
    AppRoutingModule,
    EntryModule,
    HomeModule,
    SettingsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
