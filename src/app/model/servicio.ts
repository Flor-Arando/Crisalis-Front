export class servicio{
    id?: number;
    name: string;
    unitPrice: any;
    support: boolean;

    constructor(name: string, unitPrice: any, support: boolean){
        
        this.name = name;
        this.unitPrice = unitPrice;
        this.support = support;
    }
}    