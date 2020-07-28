export class Message {

    timsStamp: Date;
    seen: boolean = false

    constructor(private data: string, private own: boolean) {
        this.timsStamp = new Date();
    }
}