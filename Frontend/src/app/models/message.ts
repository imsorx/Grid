export class Message {

    timeStamp: Date;

    constructor(
        public parantID: string,
        public data: string,
        public me: boolean,
        public seen: boolean = true
    ) {
        this.timeStamp = new Date();
    }
}