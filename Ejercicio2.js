var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.Sumar = function (n1Param, n2Param) {
        this.n1 = n1Param;
        this.n2 = n2Param;
        console.log("El resultado de la suma es ".concat(n1Param + n2Param));
    };
    Calculadora.prototype.Restar = function (n1Param, n2Param) {
        this.n1 = n1Param;
        this.n2 = n2Param;
        console.log("El resultado de la resta es ".concat(n1Param - n2Param));
    };
    Calculadora.prototype.Multiplicacion = function (n1Param, n2Param) {
        this.n1 = n1Param;
        this.n2 = n2Param;
        console.log("El resultado de la multiplicacion es ".concat(n1Param * n2Param));
    };
    Calculadora.prototype.Dividir = function (n1Param, n2Param) {
        this.n1 = n1Param;
        this.n2 = n2Param;
        if (this.n2 != 0) {
            console.log("El resultado de la division es ".concat(n1Param / n2Param));
        }
        else {
            console.log('OPERACION INVALIDA, EL COEFICIENTE NO DEBE DE SER 0');
        }
    };
    Calculadora.prototype.Factorial = function (n1Param) {
        this.n1 = n1Param;
        var resultado = 1;
        for (var i = 1; i <= this.n1; i++) {
            resultado *= i;
        }
        console.log('El resultado es: ', resultado);
    };
    return Calculadora;
}());
var ejercicio = new Calculadora();
ejercicio.Dividir(45, 5);
ejercicio.Sumar(333, 5);
ejercicio.Restar(23, 4);
ejercicio.Multiplicacion(12, 4);
ejercicio.Factorial(5);
