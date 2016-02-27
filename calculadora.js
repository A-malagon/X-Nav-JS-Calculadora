var operando1 = ""
var operando2 = ""
var primero = false;
var suma = false;
var resta = false;
var multiplicacion = false;
 
function convBinario(entero){
var numero = entero;  
var binario=""; 
    while(numero!=0){ 
        if( (numero%2)===0 ){ 
            binario= "0" + binario; 
        }else{ 
            binario = "1" + binario; 
        } 
    numero = numero/2; 
    numero = parseInt(numero,10);  
    } 
	return binario; 
}

function boton1(){
    var num1 = document.getElementById("operando1").innerHTML;
    botonNumero(num1);
}

function boton0(){
    var num0 = document.getElementById("operando0").innerHTML;
    botonNumero(num0);
}


function botonNumero(operando){
    if(operando == "0"){
        num = "0";
    } else {
        num = "1";
    }

	if(!primero){
		operando1 = operando1 + num;
		mostrar = document.getElementById("resultado");
		mostrar.innerHTML = operando1;
	}else{
		operando2 = operando2 + num;
		mostrar = document.getElementById("resultado");
		mostrar.innerHTML = operando2;
	}
}



function botonSuma(){
    var operando = document.getElementById("suma").innerHTML;
    botonOperacion(operando);
}

function botonResta(){
    var operando = document.getElementById("resta").innerHTML;
    botonOperacion(operando);
}

function botonMulti(){
    var operando = document.getElementById("multi").innerHTML;
    botonOperacion(operando);
}

function botonOperacion(operando){
    console.log(operando);
    if (operando == "+") {
        primero = true;
	    suma = true;
	    resta = false;
        multiplicacion = false;    
    } else if (operando == "-"){
        primero = true;
	    resta = true;
	    suma = false;
        multiplicacion = false;
    } else {
        primero = true;
	    resta = false;
	    suma = false;
        multiplicacion = true;
    }
}


function botonAC(){
    var disp = "Display";
	display = document.getElementById("resultado");
	display.innerHTML = disp;
    reinicio();
}

function reinicio(){
    	operando1 = "";
  		operando2 = "";
		primero = false;
  		suma = false;
  		resta = false;
        multiplicacion = false;
}

function resultadoEntero() {
	var resultado = document.getElementById("resultado");
    var resEntero;
	if(suma && operando1 != "" && operando2 != ""){
		resEntero = parseInt(operando1, 2) + parseInt(operando2, 2);
	}else if(resta && operando1 != "" && operando2 != ""){
		resEntero = parseInt(operando1, 2) - parseInt(operando2, 2);
    }else if(multiplicacion && operando1 != "" && operando2 != ""){
		resEntero = parseInt(operando1, 2) * parseInt(operando2, 2);
	}else{
		resultado.innerHTML = "Error";
        reinicio();
        resEntero = null;
	}

    return resEntero;
    
} 

function botonIgual(){
    
    var entero = resultadoEntero();
    if(entero != null){
       	binario = convBinario(entero);
       	if(binario != ""){
       		resultado.innerHTML = binario;
       	}else{
       		resultado.innerHTML = "0"
       	}
    }

    reinicio();
}
