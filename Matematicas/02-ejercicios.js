//Ejercio numero 1
function precioDescuento20 (precioOriginal, descuento){
//precioOriginal=prompt(" Digite el precio del producto ");
descuento=precioOriginal*0.20;
return precioOriginal-descuento;
};
resultadoFinal = precioDescuento20(80);
console,console.log("6.El precio del articulo $ 80 con el 20% de descuento es ",resultadoFinal);

console.log("*************************")

function Ejercio7 (ladosDados, carasPares){
return (carasPares*100)/ladosDados;
};

resultado7 = Ejercio7(6,3);
console.log("7.La probavilidad de que salga un numero par es ",resultado7,"%");
console.log("*************************");

function Ejercio8 () {
 // Coeficientes de las variables
 let ecu1 = 2, a12 = 1, b1 = 10;
 let ecu2 = 1, a22 = -3, b2 = 5;

 // Calculamos el determinante
 let determinante = ecu1 * a22 - a12 * ecu2;

 // Calculamos las variables x e y
 let x = (b1 * a22 - b2 * a12) / determinante;
 let y = (ecu1 * b2 - ecu2 * b1) / determinante;

 console.log("8.La solución del sistema es:");
 console.log("x = " + x);
 console.log("y = " + y);

};
Ejercio8();
console.log("***********************");

function Ejercio9 (){
    var hipotenusa = 10; // Longitud de la hipotenusa en cm
    var anguloAgudoRad = 30 * (Math.PI / 180); // Convertir ángulo a radianes
    
    // Calcular la longitud del cateto usando el seno del ángulo
    var longitudCateto = hipotenusa * Math.sin(anguloAgudoRad);
    
    // Mostrar el resultado
    console.log("9.La longitud de uno de los catetos es: " + longitudCateto.toFixed(2) + " cm");};
Ejercio9();

console.log("***********************");
function Ejercio10 (){
let cantidadEstudiantes=30;
let hablanIngles=18;
let hablanFrances=15;
let hablanAmbos=10;
resultado=(hablanIngles+hablanFrances)-hablanAmbos;
resultado = cantidadEstudiantes-resultado;
console.log("10. El numero de estudiantes que no hablan ninigun idioma es ",resultado);
};
Ejercio10();
