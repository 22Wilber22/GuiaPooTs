var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(nombreParam, apellidoParam, direccionParam, telefonoParam, edadParam) {
        this.nombre = nombreParam;
        this.apellido = apellidoParam;
        this.dirección = direccionParam;
        this.edad = edadParam;
        this.telefono = telefonoParam;
    }
    Persona.prototype.mayorEdad = function () {
        if (this.edad >= 18) {
            console.log('Es mayor de edad, su edad es: ', this.edad, 'años');
        }
        else {
            console.log('No es mayor de edad, su edad es: ', this.edad, 'años');
        }
    };
    return Persona;
}());
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombreParam, apellidoParam, direccionParam, telefonoParam, edadParam, sueldoParam) {
        var _this = _super.call(this, nombreParam, apellidoParam, direccionParam, telefonoParam, edadParam) || this;
        _this.sueldo = sueldoParam;
        return _this;
    }
    Empleado.prototype.cargarSueldo = function (sueldoParam) {
        this.sueldo = sueldoParam;
    };
    Empleado.prototype.mostrar = function () {
        console.log("El nombre es ".concat(this.nombre, "\n            \nEl apellido es: ").concat(this.apellido, "\n            \nLa direccion es: ").concat(this.dirección, "\n            \nEl telefono es: ").concat(this.telefono, "\n            \nEl sueldo es: $").concat(this.sueldo, " a\u00F1os\n            \nEdad: ").concat(this.edad));
    };
    return Empleado;
}(Persona));
var personita = new Empleado("Wilber", "Grande", "Villas de Zaragoza", 122345678, 11, 360);
personita.mostrar();
personita.mayorEdad();
