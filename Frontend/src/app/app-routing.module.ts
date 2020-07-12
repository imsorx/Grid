import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryComponent } from './Modules/Entry/entry.component';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./Modules/Home/home.module').then(m => m.HomeModule)
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