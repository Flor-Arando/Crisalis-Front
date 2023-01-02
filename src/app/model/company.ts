export class company{
    id?: number;
    companyName: string;
    cuil: number;
    startActivity: Date;
    

    constructor(companyName: string, cuil: number, startActivity: Date){
        
        this.companyName = companyName;
        this.cuil = cuil;
        this.startActivity = startActivity;
    }
}