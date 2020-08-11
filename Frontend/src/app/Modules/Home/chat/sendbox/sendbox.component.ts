import { Component, ViewChild, ElementRef } from '@angular/core';
import { ChatService } from '../../../../services/chat.service';
import { ElectronService } from '../../../../services/electron.service';

@Component({
    selector: 'sendbox',
    templateUrl: 'sendbox.component.html',
    styleUrls: ['sendbox.component.scss']
})

export class SendboxComponent {

    @ViewChild('inputbox') inputBox: ElementRef;
    constructor(private chatService: ChatService, private electron: ElectronService) { }

    send() {
        this.chatService.newMsg(this.inputBox.nativeElement.innerText);
        this.inputBox.nativeElement.innerText = '';
    }
    showEmoji() {
        this.electron.remote.app.showEmojiPanel();
    }
}