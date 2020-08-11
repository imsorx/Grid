import { Message } from "./message";
import { ReplaySubject, from } from 'rxjs';

export class DirectMessage {

    private messages: Message[] = [];
    public messages$: ReplaySubject<Message> = new ReplaySubject();

    constructor(private id: string, private sender: string, private reciever: string) {

    }

    public newMessage(data: string, fromLoggedUser: boolean, seen?: boolean) {
        var _message = new Message(this.id, data, fromLoggedUser ? true : false);
        this.messages$.next(_message);
        return
    }
}