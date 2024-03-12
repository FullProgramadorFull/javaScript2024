let num;
contador=0;

num=(prompt(" Ingrese el Numero "));


for (let index = 1; index <= num; index++) {
    
    if (num % index === 0) {
        contador++
    }
    
    console.log(index);
    
};

document.write(contador);
if (contador===2){
    document.write(" El numero es primo ");
}else{
    document.write(" El numero no es primo ");
};