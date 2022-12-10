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

export function areParadaIdEqual(a:Parada, b:Parada):boolean{
    if((a.getCiudad() != b.getCiudad())&&(a.getidParada() == b.getidParada())){
        return true;
    }else{
        return false;
    }
}