export class Order{
    id?: number;
    idPerson: number;
    idCompany: number;
    products: any;
    services: any;
    tax: any;
    name: string;
    price: number;

    constructor(idPerson: number, idCompany: number, products: any, services: any, tax: any, name: string, price:number){
        
        this.idPerson = idPerson;
        this.idCompany = idCompany;
        this.products = products;
        this.services = services;
        this.tax = tax;
        this.name = name;
      this.price = price;
    }
}    


/*"idPerson" : 1,
"idCompany" : 1,
"products" : [{ "id" : 3, "warranty" : 2, "quantity": 3, "tax":["IVA"]}, { "id" : 2, "warranty" : 5, "quantity": 1}],
"services" : [{"id" : 1}, {"id" : 2}]
}*/