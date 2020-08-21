export class User {

    public id: string;
    public name: string;
    public imgUrl: string;
    public mail: string;
    public status: string = 'offline';

    constructor(response: userResponse) {
        this.id = response._id;
        this.name = response.name;
        this.imgUrl = response.img;
        this.mail = response.mail;
    }
}