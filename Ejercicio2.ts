class Calculadora {
    n1: number;
    n2: number;

    Sumar(n1Param: number, n2Param: number) {
        this.n1 = n1Param;
        this.n2 = n2Param;
        console.log(`El resultado de la suma es ${n1Param + n2Param}`)
    }
    Restar(n1Param: number, n2Param: number) {
        this.n1 = n1Param;
        this.n2 = n2Param;
        console.log(`El resultado de la resta es ${n1Param - n2Param}`)
    }
    Multiplicacion(n1Param: number, n2Param: number) {
        this.n1 = n1Param;
        this.n2 = n2Param;
        console.log(`El resultado de la multiplicacion es ${n1Param * n2Param}`)
    }
    Dividir(n1Param: number, n2Param: number) {
        this.n1 = n1Param;
        this.n2 = n2Param;
        if (this.n2 != 0) {
            console.log(`El resultado de la division es ${n1Param / n2Param}`)
        } else {
            console.log('OPERACION INVALIDA, EL COEFICIENTE NO DEBE DE SER 0')
        }
    }
    Factorial(n1Param: number) {
        this.n1 = n1Param;
        let resultado = 1;
        for (let i = 1; i <= this.n1; i++) {
            resultado *= i;
        }
        console.log('El resultado es: ', resultado);
    }

}

let ejercicio = new Calculadora()
ejercicio.Dividir(45, 5);
ejercicio.Sumar(333, 5);
ejercicio.Restar(23, 4);
ejercicio.Multiplicacion(12, 4);
ejercicio.Factorial(5);
