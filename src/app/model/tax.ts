export class Tax {
    id: number;
    name: string;
    aliquot: number;

    constructor(id : number, name: string, aliquot: number) {
        this.id = id,
        this.name = name;
        this.aliquot = aliquot;
    }
}