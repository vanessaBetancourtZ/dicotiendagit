export class Disco {
    _id?: number;
    artista: String;
    album: String;
    año: String;
    categoria: String;
    estado: String;
    precio: number;
    

    constructor (artista:String, album:String, año:String, categoria:String, estado:String, precio:number){
    this.artista= artista;
    this.album= album;
    this.año= año;
    this.categoria= categoria;
    this.estado= estado;
    this.precio= precio;
    
    }

    
}