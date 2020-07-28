import { wsSocketService } from './../../services/ws.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

import { HomeComponent } from './home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListComponent } from './list/list.component';
import { UserComponent } from './list/user/user.component';
import { ChatComponent } from './chat/chat.component';
import { TopbarComponent } from './chat/topbar/topbar.component';
import { MessageComponent } from './chat/message/message.component';
import { SendboxComponent } from './chat/sendbox/sendbox.component';
import { ProfileComponet } from './profile/profile.component'

import { HomeRoutingModule } from './home-routing.module';
import { ChatService } from '../../services/chat.service';
import { CoreService } from '../../services/core.service';


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
        SharedModule
    ],
    providers: [ChatService, CoreService, wsSocketService],
    exports: [
        FormsModule,
        HomeComponent
    ]
})
export class HomeModule { }