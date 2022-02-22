const dateMonth = document.getElementById('date-month')
const dateYear = document.getElementById('date-year')
const dateNumber = document.getElementById('date-number')
const dateText = document.getElementById('date-text')

const setDate =()=>{
  const date = new Date()
  dateMonth.textContent=date.toLocaleString('es', {month: 'long'})
  dateNumber.textContent=date.toLocaleString('es',  {day: 'numeric'})
  dateText.textContent=date.toLocaleString('es', {weekday:'long'})
  dateYear.textContent=date.toLocaleString('es', {year:'numeric'})
}
function cargarReloj(){
  let fechaHora = new Date()
  let hora = fechaHora.getHours() 
  let minuto = fechaHora.getMinutes()
  let segundo = fechaHora.getSeconds()
  let meridiano = "AM"
  if(hora == 0){
      hora = 12
  }
  if(hora > 12) {
      hora = hora - 12
      meridiano = "PM"
  }
  hora = (hora < 10) ? "0" + hora : hora
  minuto = (minuto < 10) ? "0" + minuto : minuto
  segundo = (segundo < 10) ? "0" + segundo : segundo
  let tiempo = hora + ":" + minuto + ":" + segundo + " " + meridiano    
  document.getElementById("clock").innerText = tiempo
  document.getElementById("clock").textContent = tiempo
  setTimeout(cargarReloj, 500)
}
cargarReloj()
setDate()
