var n = new Array();

function ElementId(id){
	return document.getElementById(id);
}

function hazId(orden,operacion){
	return "n"+orden+operacion;
}

function recogeDatos(num){
	for (var i=0;i<num;i++){
		n[i]=prompt("N" + (i+1));
		if (n[i]==null){
				return false;
		}
		while (isNaN(n[i])){
			n[i]= prompt("Por favor, introduzca un número:");
			if (n[i]==null){
				return false;
			}
		}
	}
}

function suma(nOperandos){
	var sol=0;

	if(recogeDatos(nOperandos)==false){
		alert("Ha cancelado la operación");
	}
	else {
		for (var i=0; i<nOperandos;i++){
			ElementId(hazId(i+1,"suma")).innerHTML=n[i];
			sol = sol + +n[i];
		}
		ElementId("solucionsuma").innerHTML=sol;
	}
}

function resta(){
	if(recogeDatos(2)==false){
		alert("Ha cancelado la operación");
	}
	else{
		ElementId("n1resta").innerHTML=n[0];
		ElementId("n2resta").innerHTML=n[1];
		ElementId("solucionresta").innerHTML=+n[0] - +n[1];
	}
}

function multiplicacion(nOperandos){
	var sol=1;
	if (recogeDatos(nOperandos)==false){
		alert("Ha cancelado la operación");
	}
	else{
		for (var i=0; i<nOperandos;i++){	
			ElementId(hazId(i+1,"multiplicacion")).innerHTML=n[i];
			sol = sol * +n[i];
		}
	ElementId("solucionmultiplicacion").innerHTML=sol.toFixed(2);
	}
}

function division(){
	if (recogeDatos(2)==false){
		alert("Ha cancelado la operación");
	}
	else{	
		ElementId("n1division").innerHTML=n[0];
		ElementId("n2division").innerHTML=n[1];
		ElementId("soluciondivision").innerHTML=+n[0]/ +n[1];
	}
}