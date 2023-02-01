
export class Servicio{
    id?: number;
    name: string;
    price: number;
    supportPrice: number;
    taxes: any;

    constructor(name: string, price: number, supportPrice: number, tax: any){
        
        this.name = name;
        this.price = price;
        this.supportPrice = supportPrice;
        this.taxes = tax;
       
    }
}    