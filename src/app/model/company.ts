export class Company{
    id?: number;
    companyName: string;
    cuil: number;
    activityStart: Date;
    

    constructor(companyName: string, cuil: number, startActivity: Date){
        
        this.companyName = companyName;
        this.cuil = cuil;
        this.activityStart = startActivity;
    }
}