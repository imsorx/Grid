import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './Modules/settings/settings.component';
import { EntryComponent } from './Modules/Entry/entry.component';
import { HomeComponent } from './Modules/Home/home.component';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./Modules/Home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: '',
    component: EntryComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }