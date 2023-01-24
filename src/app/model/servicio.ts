export class Servicio{
    id?: number;
    name: string;
    price: number;
    

    constructor(name: string, price: number, support: boolean){
        
        this.name = name;
        this.price = price;
       
    }
}    