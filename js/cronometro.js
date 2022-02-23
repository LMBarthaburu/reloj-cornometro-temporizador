window.onload = () => {
  h = 0; m = 0; s = 0; mls = 0; timeStarted= 0
  time = document.getElementById("time")
  btnStart = document.getElementById("btn-start")
  btnStop = document.getElementById("btn-stop")
  btnReset = document.getElementById("btn-reset")
  buttons()
};
function buttons(){
  btnStart.addEventListener("click", start)
  btnStop.addEventListener("click", pause)
  btnReset.addEventListener("click", reset) 
}
function write(){
  let ht, mt, st, mlst
  mls++

  if (mls > 99){
    s++
    mls= 0 
  }
  if (s > 59){
    m++
    s= 0
  }
  if (m > 59){
    h++
    m= 0
  }

  mlst = ('0' + mls).slice(-2)
  st = ('0' + s).slice(-2)
  mt = ('0' + m).slice(-2)
  ht = ('0' + h).slice(-2)

  time.innerHTML = `${ht}:${mt}:${st}.${mlst}`
}
function start(){
  write()
  timeStarted = setInterval(write, 10)
  btnStart.removeEventListener("click", start)
  btnStart.classList.add("active-btn")
  btnStop.classList.remove("active-btn")
}
function pause(){
  clearInterval(timeStarted)
  btnStart.addEventListener("click", start)
  btnStop.classList.add("active-btn")
  btnStart.classList.remove("active-btn")
}
function reset(){   
  clearInterval(timeStarted)
  time.innerHTML = "00:00:00.00"
  h= 0; m= 0 ; s= 0; mls= 0
  btnStart.addEventListener("click", start)
  btnStart.classList.remove("active-btn")
  btnStop.classList.remove("active-btn")
}