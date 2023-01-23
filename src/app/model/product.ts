export class Product{
    id?: number;
    name: string;
    unitPrice: any;


    constructor(name: string, unitPrice: any){
        
        this.name = name;
        this.unitPrice = unitPrice;
      
    }
}    