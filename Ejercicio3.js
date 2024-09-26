var Cancion = /** @class */ (function () {
    function Cancion(tituloParm, generoParam) {
        this.genero = generoParam;
        this.titulo = tituloParm;
    }
    Cancion.prototype.getAutor = function () {
        return this.autor;
    };
    Cancion.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    Cancion.prototype.MostrarDatos = function () {
        console.log("El autor es: ".concat(this.getAutor(), "\n La cacion es: ").concat(this.titulo, "\nEl genero es: ").concat(this.genero));
    };
    return Cancion;
}());
var musica = new Cancion('The White Stripes', 'garage rock');
musica.setAutor('Seven Nation Army');
musica.MostrarDatos();
