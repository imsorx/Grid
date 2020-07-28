import 'reflect-metadata';
import '../polyfills';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Providers
import { httpInterceptorProviders } from './interceptors/index';
import { GlobalService } from './services/global.service';

//Modules
import { SharedModule } from './shared/shared.module';
import { EntryModule } from './modules/entry/entry.module';

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
  ],
  providers: [httpInterceptorProviders, GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
