const randomColor=()=>{
    const hex='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
}

function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }

  let intervalId;
const startChangingColor=()=>{
    if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000)
    console.log("START")}
}
const stopChangingColor = function () {
    clearInterval(intervalId);
    console.log("STOPPED")
    intervalId = null;
  }
  

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);