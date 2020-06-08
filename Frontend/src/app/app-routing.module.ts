import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Modules/Home/home.component';
import { SettingsComponent } from './Modules/settings/settings.component';
import { EntryComponent } from './Modules/Entry/entry.component';


const routes: Routes = [
  {
    path: '',
    component: EntryComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }