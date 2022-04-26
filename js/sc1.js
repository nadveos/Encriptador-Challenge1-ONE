var enTxt = document.getElementById("atx");
var saTxt = document.getElementById("rst");

function cambiarLetras(cadena){
    return cadena
    .replace(/e/ig,"enter")
    .replace(/i/ig,"imes")
    .replace(/a/ig,"ai")
    .replace(/o/ig,"ober")
    .replace(/u/ig,"ufat");
}
function revLetras (rev){
    return rev
    .replace(/enter/ig,"e")
    .replace(/imes/ig,"i")
    .replace(/ai/ig,"a")
    .replace(/ober/ig,"o")
    .replace(/ufat/ig,"u");
}
function encriptar(){
    var txt = enTxt.value ;
    var nTxt = txt.toLowerCase();
    var nTn = nTxt.normalize("NFKD");


    saTxt.textContent = cambiarLetras(nTn);
}
function desencriptar(){
    var txt = enTxt.value ;
    var nTxt = txt.toLowerCase();
    var nTn = nTxt.normalize("NFKD");
    saTxt.textContent = revLetras(nTn);
}
// var copyTxt = document.getElementById("rst");
function copiar(){
    saTxt.select();
    saTxt.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(saTxt.value);
    alert("Texto copiado con éxito: " + saTxt.value);
}
// validador de acentos
// var acentos = ["á","à","ã","â","é","è","ê","í","ì","î","õ","ó","ò","ô","ú","ù","û"]
// var stringToCheck = nTn.value;

// for(var i=0; i < stringToCheck.length; i++){
//     for(var j=0; j < acentosArray.length; j++){
//         if(stringToCheck[i] === acentos[j]){
//             alert("Np puedes usar texto con acentuaciones");
//         }
//         else{}
//     }
// }