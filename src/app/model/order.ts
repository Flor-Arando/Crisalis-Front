export class Order {
    id: number;
    idPerson: number;
    idCompany?: number;
    person: string;
    company: string;
    products: any[];
    services: any[];
    
    constructor(idPerson: number, idCompany: number, person: string, company:string, products: any[], services: any[]) {
        this.idPerson = idPerson;
        this.idCompany = idCompany;
        this.company = company;
        this.person = person;
        this.products = products;
        this.services = services;
    }

/*    setId(id : number) : void {
        this.id = id;
    }*/
}    


/*"idPerson" : 1,
"idCompany" : 1,
"products" : [{ "id" : 3, "warranty" : 2, "quantity": 3, "tax":["IVA"]}, { "id" : 2, "warranty" : 5, "quantity": 1}],
"services" : [{"id" : 1}, {"id" : 2}]
}*/