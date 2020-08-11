export class loggedUser {

    //Logged-in user's properties
    public name: string;
    public mail: string;
    public imgUrl: string;

    private _token: string;
    private _id: string;
    public dsg: string = "Professor";
    private _channels: string[];
    private _chats: string[];

    //Additional Properties
    status: 'online' | 'busy' | 'away' = 'online';

    //Initialize with details
    constructor(res: loginResponse) {
        this._token = res.token;
        this._id = res._id;
        this.name = res.name;
        this.imgUrl = res.img;
        this.mail = res.mail;
        this._channels = res.channels;
        this._chats = res.convers;
    }

    //Update user details
    public update(_name?: string, _dsg?: string) {
        this.name = _name;
        this.dsg = _dsg;
    }

    // Getter methods for private properties
    get token() {
        return this._token;
    }
    get id() {
        return this._id;
    }
    get channels() {
        return this._channels;
    }
    get chats() {
        return this._chats;
    }
}