import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListComponent } from './list/list.component';
import { UserComponent } from './list/user/user.component';
import { ChatComponent } from './chat/chat.component';
import { TopbarComponent } from './chat/topbar/topbar.component';
import { MessageComponent } from './chat/message/message.component';
import { SendboxComponent } from './chat/sendbox/sendbox.component';


@NgModule({
    declarations: [
        HomeComponent,
        SidebarComponent,
        ListComponent,
        UserComponent,
        ChatComponent,
        TopbarComponent,
        MessageComponent,
        SendboxComponent
    ],
    imports: [CommonModule, FormsModule],
    exports: [
        FormsModule,
        HomeComponent
    ]
})
export class HomeModule { }