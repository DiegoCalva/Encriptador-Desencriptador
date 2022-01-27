
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

var botEnc= document.querySelector("#btn-encriptar");
var botDesEnc= document.querySelector("#btn-desencriptar");
var botcopy= document.querySelector("#btn-copy");
var outpt= document.querySelector("#msg");
//Boton Encriptar
botEnc.addEventListener("click",function(event)
{
	event.preventDefault();
	var impt= document.querySelector("#input-texto");
	var entrada= impt.value;
	outpt.value=encriptar(entrada);
});
//Boton Desencriptar
botDesEnc.addEventListener("click",function(event)
{
	event.preventDefault();
	var impt= document.querySelector("#input-texto");
	var entrada= impt.value;
	outpt.value=desencriptar(entrada);
});
//Boton Portapapeles
botcopy.addEventListener("click",function(event)
{
	event.preventDefault();
	var impt= document.querySelector("#msg");
	
	//var content = document.getElementById('textArea');
    
    impt.select();
    document.execCommand('copy');
});
//Funcion encriptar
function encriptar (x)
{	
var aux=0;
var encr="";
	while(aux<x.length)
	{
		if(x.charAt(aux)=='e')
		{encr=encr+"enter";}
		else{
		if(x.charAt(aux)=='i')
			{encr=encr+"imes";}
			else
			{if(x.charAt(aux)=='a')
				{encr=encr+"ai";}
				else
				{if(x.charAt(aux)=='o')
					{encr=encr+"ober";}
					else
					{if(x.charAt(aux)=='u')
						{encr=encr+"ufat";}
						else
						{encr=encr+x.charAt(aux);}
					}}}}
		aux++;
	}
	return encr;
}
//Funcion desencriptar
function desencriptar (y)
{	
y=y.replaceAll('enter','e');
y=y.replaceAll('imes','i');
y=y.replaceAll('ai','a');
y=y.replaceAll('ober','o');
y=y.replaceAll('ufat','u');
return  y;
}
/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/