abstract class Persona{
    nombre:string
    apellido:string
    dirección:string
    telefono:number
    edad:number

    constructor(nombreParam:string,apellidoParam:string,direccionParam:string,telefonoParam:number,edadParam:number){
        this.nombre = nombreParam;
        this.apellido = apellidoParam;
        this.dirección = direccionParam;
        this.edad = edadParam;
        this.telefono = telefonoParam;
    }



    mayorEdad(){
        if(this.edad>=18){
            console.log('Es mayor de edad, su edad es: ',this.edad, 'años');
        } else{
            console.log('No es mayor de edad, su edad es: ',this.edad, 'años');
        }
    }

    abstract mostrar()
}

class Empleado extends Persona{
    sueldo:number;
    constructor(nombreParam: string, apellidoParam: string, direccionParam: string, telefonoParam: number, edadParam: number, sueldoParam: number) {
        super(nombreParam, apellidoParam, direccionParam, telefonoParam, edadParam);
        this.sueldo = sueldoParam;
    }

    cargarSueldo(sueldoParam){
        this.sueldo = sueldoParam
    }

    mostrar() {
        console.log(`El nombre es ${this.nombre}
            \nEl apellido es: ${this.apellido}
            \nLa direccion es: ${this.dirección}
            \nEl telefono es: ${this.telefono}
            \nEl sueldo es: $${this.sueldo} años
            \nEdad: ${this.edad}`);
    }

    
}
let personita =new  Empleado("Wilber","Grande","Villas de Zaragoza",122345678,11,360);
personita.mostrar();
personita.mayorEdad()
