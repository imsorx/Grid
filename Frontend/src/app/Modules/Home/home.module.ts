import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListComponent } from './list/list.component';
import { UserComponent } from './list/user/user.component';
import { ChatComponent } from './chat/chat.component';
import { TopbarComponent } from './chat/topbar/topbar.component';
import { MessageComponent } from './chat/message/message.component';
import { SendboxComponent } from './chat/sendbox/sendbox.component';
import { ProfileComponet } from './profile/profile.component'

import { wsSocketService } from './../../services/ws.service';
import { ChatService } from '../../services/chat.service';


@NgModule({
    declarations: [
        HomeComponent,
        SidebarComponent,
        ListComponent,
        UserComponent,
        ChatComponent,
        TopbarComponent,
        MessageComponent,
        SendboxComponent,
        ProfileComponet
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ],
    providers: [ChatService, wsSocketService],
    exports: [
        FormsModule,
        HomeComponent
    ]
})
export class HomeModule { }