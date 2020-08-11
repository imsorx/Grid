import { Injectable, OnInit } from '@angular/core';
import * as socketWrapper from 'ws-wrapper'
import { AuthService } from './auth.service';
import { UsersService } from './users.service';


@Injectable()

export class wsSocketService implements OnInit {

    socket: socketWrapper;

    constructor(private users: UsersService, private auth: AuthService) {
        this.socket = new socketWrapper(new WebSocket('ws://localhost:4040'));
        this.socket.once('open', () => this.socket.emit('login', this.auth.loggedUser.id));
        this.setupListners();
    }

    ngOnInit() {
    }

    sendDM(id: string, from: string, data: string): void {
        this.socket.of('convers').emit('message', from, data);
    }

    setupListners() {
        console.log('Setting up listeners..');
        this.socket.on('online', (n = 1, id: string) => this.handleStatus(n, id));
        console.log('Listeners set!');
    }

    handleStatus(n: number, id: string) {
        if (n == 1) {
            let index = this.users.users.findIndex((u, i) => {
                if (u.id == id)
                    return i;
            });
            this.users.users[index].status = 'online';
            console.log(id + ' online!')
        }
        if (n == 0) {
            let index = this.users.users.findIndex((u, i) => {
                if (u.id == id)
                    return i;
            });
            this.users.users[index].status = 'offline';
        }
    }
}
