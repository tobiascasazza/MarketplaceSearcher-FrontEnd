export class Prenda{
    id: number;
    nombre: string;
    talle: string;
    precio: number;
    descripcion: string;
    foto: string;
    constructor(
        id: number,
        nombre: string,
        talle: string,
        precio: number,
        descripcion: string,
        foto: string
    ){
        this.id = id;
        this.nombre = nombre;
        this.talle = talle;
        this.precio = precio;
        this.descripcion = descripcion;
        this.foto = foto;
    }
}