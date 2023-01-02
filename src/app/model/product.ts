export class product{
    id?: number;
    name: string;
    unitPrice: any;
    warranty: boolean;

    constructor(name: string, unitPrice: any, warranty: boolean){
        
        this.name = name;
        this.unitPrice = unitPrice;
        this.warranty = warranty;
    }
}    