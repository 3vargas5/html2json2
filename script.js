var texto = document.querySelector(".texto1");
var mensaje = document.querySelector(".texto2");
var copiar = document.querySelector(".botonCopiar");

function verificar_formato(){
    let validador = texto.value.match(/^[a-z !]*$/);
    if(!validador || validador === 0) {
        alert("solo se permiten las letras minúsculas y sin acentos ni números");
        return true;
    }
}

function asociacion(vocal){
    if (vocal == "a") {
        return "ai";
    }
    if (vocal == "e") {
        return "enter";
    }
    if (vocal == "i") {
        return "imes";
    }
    if (vocal == "o") {
        return "ober";
    }
    if (vocal == "u") {
        return "ufat";
    }
}

function encriptacion(texto){
    let total = "";
    for (let i = 0; i < texto.length; i++) {
        elemento = texto[i];
        if (["a","e","i","o","u"].includes(elemento)){
            total += asociacion(elemento);
        }
        else{
            total += elemento;
        }
    }
    return total;
}

function fun_botonEncriptar(){
        let text = texto.value;
        if (!verificar_formato(text)){
            mensaje.value = encriptacion(text);
            mensaje.style.backgroundImage = "none";
        }
}

function desencriptar(texto){
    let diccionario = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    for(let i = 0; i < diccionario.length; i++){
        if(texto.includes(diccionario[i][1])){
            texto = texto.replaceAll(diccionario[i][1] , diccionario[i][0]);
        }
    }
    return texto;
}

function fun_botonDesencriptar(){
    let text = texto.value;
    if (!verificar_formato(text)){
        mensaje.value = desencriptar(text);
    }
}

function fun_copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    alert("Copiado");
}