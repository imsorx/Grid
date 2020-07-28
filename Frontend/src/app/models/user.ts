export class User {

    //Additional Properties
    status: 'online' | 'busy' | 'away' = 'online';

    //Initialize with details
    constructor(
        private token: string,
        private id: string,
        public name: string,
        public mail: string,
        public img: string,
        public dsg: string) {
    }

    //Update user details
    public update(_name?: string, _dsg?: string) {
        this.name = _name;
        this.dsg = _dsg;
    }

}