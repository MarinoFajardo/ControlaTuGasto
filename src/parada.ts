export class Parada{

    private idParada: string;
    private ciudad: string;

    constructor(idParada :string, ciudad: string){
        this.idParada=idParada;
        this.ciudad = ciudad;
    }
    
    public getidParada():string{
        return this.idParada;
    }

    public getCiudad():string{
        return this.ciudad;
    }
}