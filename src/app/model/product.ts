export class Product{
    id?: number;
    name: string;
    unitPrice: any;
    taxes: any;
    

    constructor(name: string, unitPrice: any, tax: any) {
        
        this.name = name;
        this.unitPrice = unitPrice;
        this.taxes = tax;
    }
}    