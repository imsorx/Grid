import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component'
import { ChatComponent } from './chat/chat.component'


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [{ path: 'chat/:id', component: ChatComponent }]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})
export class HomeRoutingModule { }