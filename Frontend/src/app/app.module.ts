import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxElectronModule } from 'ngx-electron';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FilterPipe } from './pipes/filter.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EntryComponent } from './components/entry/entry.component';
import { TitlebarComponent } from './components/titlebar/titlebar.component';
import { ProfileComponent } from './components/home/profile/profile.component';
import { GroupsComponent } from './components/home/groups/groups.component';
import { AllusersComponent } from './components/home/allusers/allusers.component';
import { TabsComponent } from './components/home/tabs/tabs.component';
import { UserComponent } from './components/home/allusers/user/user.component';
import { LoginComponent } from './components/entry/login/login.component';
import { SignupComponent } from './components/entry/signup/signup.component';
import { ChatwinComponent } from './components/chatwin/chatwin.component';
import { MessageComponent } from './components/chatwin/message/message.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EntryComponent,
    TitlebarComponent,
    ProfileComponent,
    GroupsComponent,
    AllusersComponent,
    TabsComponent,
    FilterPipe,
    UserComponent,
    LoginComponent,
    SignupComponent,
    ChatwinComponent,
    MessageComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxElectronModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
