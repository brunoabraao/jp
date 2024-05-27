let num = document.querySelector('input#fnum')
let lista = document.querySelector('selectflista')
let res = document.querySelector('div#res')
let valores = []

function isNumeros(n){
if(Number(n) >= 1 && Number(n)<= 100 ){
    return true 
} else{
    return false
}
}
function isLista(n,l) {
if(l.indexof(Number(n)) != -1) {
    return true 
} else{
    return false 
}
}
function adicionar() {
    if(isNumeros(num.value) && !isLista (num.value) ) {
        window.alert('tudo ok')
    } else {
        window.alert('valor invalido ou ja encontado na lista ')
    }
}