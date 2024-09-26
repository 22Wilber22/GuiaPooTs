class Cuenta{
    nombre:string;
    cantidad:number;
    tipoDeCuenta:string;
    numeroDeCuenta: number;

    constructor(nombreParam:string,cantidadParam:number,tipoDeCuentaParam:string, numeroDeCuenta:number){
        this.cantidad = cantidadParam;
        this.nombre = nombreParam;
        this.tipoDeCuenta = tipoDeCuentaParam;
        this.numeroDeCuenta = numeroDeCuenta;
    }

    Depositar(cantidadParam:number){
        if(cantidadParam<5){
            console.log('El monto debe de ser mayor a 5 dolares');
        } else{
            console.log(`El deposito se ha realizado ${cantidadParam}`);
            this.cantidad =+ cantidadParam;
        }
    }

    Retirar(valor:number){
        if(valor<5){
            console.log('El monto debe de ser mayor a 5 dolares');
        } else if (valor>this.cantidad)
        {
            console.log('No tienes suficiente dinero');
        } else{
            console.log(`El retiro se ha realizado ${valor}`);
            this.cantidad -= valor;
        }
    }
    
    Mostrar(){
        console.log(`El nombre del dueño de la cuenta es: ${this.nombre}\nDinero disponible: ${this.cantidad}\nTipo de cuenta: ${this.tipoDeCuenta}
            \nNúmero de cuenta: ${this.numeroDeCuenta}`);
    }
}


let usuario = new Cuenta('Wilber',80,'Ahorro',232313);
usuario.Depositar(4);
usuario.Retirar(90)
usuario.Mostrar(); 