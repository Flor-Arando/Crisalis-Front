export class Company{
    id?: number;
    companyName: string;
    cuit: number;
    activityStart: Date;
    

    constructor(companyName: string, cuit: number, startActivity: Date){
        // TODO: cambiar nombre, de companyName a name
        this.companyName = companyName;
        this.cuit = cuit;
        this.activityStart = startActivity;
    }
}