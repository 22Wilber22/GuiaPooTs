var CabeceraPagin = /** @class */ (function () {
    function CabeceraPagin() {
    }
    CabeceraPagin.prototype.primerMetodo = function (tituloParam, colorParam, fuenteParam) {
        this.titulo = tituloParam;
        this.color = colorParam;
        this.fuentePag = fuenteParam;
    };
    CabeceraPagin.prototype.segundoMetodo = function (alineacionParam) {
        this.alineacion = alineacionParam;
    };
    CabeceraPagin.prototype.tercerMetodo = function () {
        console.log("Titulo: ".concat(this.titulo, "\nColor: ").concat(this.color, "\nFuente: ").concat(this.fuentePag, "\nAlineacion: ").concat(this.alineacion));
    };
    return CabeceraPagin;
}());
var pagina = new CabeceraPagin();
pagina.primerMetodo('Mi primer pagina web', 'Verde', 'Calibri');
pagina.segundoMetodo('justficado');
pagina.tercerMetodo();
