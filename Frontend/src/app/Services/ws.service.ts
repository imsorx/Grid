import { CoreService } from './core.service';
import { GlobalService } from './global.service';
import { Injectable } from '@angular/core';
import * as socketWrapper from 'ws-wrapper'


@Injectable()

export class wsSocketService {

    socket: socketWrapper;

    constructor(private global: GlobalService, private core: CoreService) {
        this.socket = new socketWrapper(new WebSocket('ws://localhost:4040'));
        this.socket.once('open', () => this.socket.emit('login', core.currentUser._id));
    }

}
