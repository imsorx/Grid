import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryComponent } from './components/entry/entry.component';
import { HomeComponent } from './components/home/home.component';
import { AllusersComponent } from './components/home/allusers/allusers.component';
import { GroupsComponent } from './components/home/groups/groups.component';
import { ProfileComponent } from './components/home/profile/profile.component';
import { LoginComponent } from './components/entry/login/login.component';
import { SignupComponent } from './components/entry/signup/signup.component';
import { ChatwinComponent } from './components/chatwin/chatwin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'entry',
    pathMatch: 'full'
  },
  {
    path: 'entry',
    component: EntryComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent,
        data: { animation: 'loginpage' }
      },
      {
        path: 'signup',
        component: SignupComponent,
        data: { animation: 'signuppage' }
      }
    ]
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'allusers',
        pathMatch: 'full'
      },
      {
        path: 'allusers',
        component: AllusersComponent
      },
      {
        path: 'groups',
        component: GroupsComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      }
    ]
  },
  {
    path: 'chat',
    component: ChatwinComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
