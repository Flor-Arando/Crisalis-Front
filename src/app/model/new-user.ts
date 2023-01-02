export class NewUser {
    fullName!:string;
    userName!:string;
    email!:string;
    password!:string;
    //authorities!: string[];

    constructor(fullName: string, userName: string, email: string, password: string) {
        this.fullName = fullName;
        this.userName = userName;
        this.email = email;
        this.password = password;
    }
}
