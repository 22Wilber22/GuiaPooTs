class Cancion{
    titulo:string;
    genero:string;
    private autor: string;

    constructor(tituloParm:string,generoParam:string){
        this.genero = generoParam;
        this.titulo = tituloParm;
    }

    getAutor(){
        return this.autor;
    }

    setAutor(autor:string){
        this.autor = autor;
    }

    MostrarDatos(){
        console.log(`El autor es: ${this.getAutor()}\n La cacion es: ${this.titulo}\nEl genero es: ${this.genero}`)
    }
}

let musica = new Cancion('The White Stripes', 'garage rock');
musica.setAutor('Seven Nation Army')
musica.MostrarDatos();

