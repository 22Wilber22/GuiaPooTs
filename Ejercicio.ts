class CabeceraPagin{
    titulo: string;
    color: string;
    fuentePag: string;
    alineacion: string;


    primerMetodo(tituloParam:string, colorParam:string, fuenteParam:string){
        this.titulo = tituloParam;
        this.color = colorParam;
        this.fuentePag = fuenteParam;
    }

    segundoMetodo(alineacionParam){
        this.alineacion = alineacionParam;
    }
    tercerMetodo(){
        console.log(`Titulo: ${this.titulo}\nColor: ${this.color}\nFuente: ${this.fuentePag}\nAlineacion: ${this.alineacion}`)
    }

}

const pagina = new CabeceraPagin();
pagina.primerMetodo('Mi primer pagina web','Verde','Calibri');
pagina.segundoMetodo('justficado');
pagina.tercerMetodo();