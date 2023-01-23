export class Company{
    id?: number;
    companyName: string;
    cuit: number;
    activityStart: Date;
    

    constructor(companyName: string, cuit: number, startActivity: Date){
        
        this.companyName = companyName;
        this.cuit = cuit;
        this.activityStart = startActivity;
    }
}