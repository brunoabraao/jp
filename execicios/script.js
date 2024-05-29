const num = document.querySelector('input#fnum')
const lista = document.getElementById('flista')
const res = document.querySelector('div#res')
const valores = []
const item = document.createElement('option')
const tot = valores.length

function isNumeros(n){
if(Number(n) >= 1 && Number(n)<= 100 ){
    return true 
} else{
    return false
}
  }
function inLista(n,i) {
if(i.indexOf(Number(n)) != -1) {
    return true 
} else{
    return false 
}
  }
function adicionar() {
    if(isNumeros(num.value) && !inLista (num.value ,valores)) {
        valores.push(Number(num.value))
        item.text = ` Valor ${num.value} adicionado `
        lista.appendChild(item)
    } else {
        window.alert('valor invalido ou ja encontado na lista ')
    }
}
num.value = ''
num.focus()

function finalizar(){
if(valores.length == 0){
window.alert (' adiciona valores antes de finalizar')
} else{
res.innerHTML = ''
res.innerHTML += `<p>ao todo temos ${tot} nomeros cadastrados. </p> `
 }
}