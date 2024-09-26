var Cuenta = /** @class */ (function () {
    function Cuenta(nombreParam, cantidadParam, tipoDeCuentaParam, numeroDeCuenta) {
        this.cantidad = cantidadParam;
        this.nombre = nombreParam;
        this.tipoDeCuenta = tipoDeCuentaParam;
        this.numeroDeCuenta = numeroDeCuenta;
    }
    Cuenta.prototype.Depositar = function (cantidadParam) {
        if (cantidadParam < 5) {
            console.log('El monto debe de ser mayor a 5 dolares');
        }
        else {
            console.log("El deposito se ha realizado ".concat(cantidadParam));
            this.cantidad = +cantidadParam;
        }
    };
    Cuenta.prototype.Retirar = function (valor) {
        if (valor < 5) {
            console.log('El monto debe de ser mayor a 5 dolares');
        }
        else if (valor > this.cantidad) {
            console.log('No tienes suficiente dinero');
        }
        else {
            console.log("El retiro se ha realizado ".concat(valor));
            this.cantidad -= valor;
        }
    };
    Cuenta.prototype.Mostrar = function () {
        console.log("El nombre del due\u00F1o de la cuenta es: ".concat(this.nombre, "\nDinero disponible: ").concat(this.cantidad, "\nTipo de cuenta: ").concat(this.tipoDeCuenta, "\n            \nN\u00FAmero de cuenta: ").concat(this.numeroDeCuenta));
    };
    return Cuenta;
}());
var usuario = new Cuenta('Wilber', 80, 'Ahorro', 232313);
usuario.Depositar(4);
usuario.Retirar(90);
usuario.Mostrar();
