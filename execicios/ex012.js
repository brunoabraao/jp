const agora = new Date
const horas = agora.getHours
console.log('Agora são exatamente  ${horas} horas' )
if(horas < 12) { 
    console.log('Bom dia ')
}else if(horas <= 18 ) {
    console.log('boa tarde ')
}else{
    console.log('boa noite')
}
  
