console.log("Bismillah")

const hours = document.querySelector(".hour-hand");
const minutes = document.querySelector(".min-hand");
const seconds = document.querySelector(".second-hand");

function setDate(){

    const now = new Date();
    
    const getSec = now.getSeconds();
    const secDegree = ((getSec/60)*360)+90;
    seconds.style.transform = `rotate(${secDegree}deg)`;
    

    const getMin = now.getMinutes();
    const minDegree = ((getMin/60)*360)+90;
    minutes.style.transform = `rotate(${minDegree}deg)`;
    
    const getHour = now.getHours();
    const hourDegree = ((getHour/12)*360)+90;
    hours.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate,1000);