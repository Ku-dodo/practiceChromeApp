{/* <span id="hour">00</span>
<span id="time-point"></span>
<span id="min">00</span>
<span id="sec">00</span> */}

const hour = document.querySelector("#hour")
const min = document.querySelector("#min")
const sec = document.querySelector("#sec")
const amPm = document.querySelector("#amPm")
const timePoint = document.querySelector("#time-point")



function getTime() {
    const date = new Date();
    hour.innerText = String(date.getHours()).padStart(2, "0")
    min.innerText = String(date.getMinutes()).padStart(2, "0")
    sec.innerText = String(date.getSeconds()).padStart(2, "0")
    if (date.getHours() < 12) {
        amPm.innerText = "am"
        
    } else {
        amPm.innerText = "pm"
    }
}

function toggleTimePoint () {
    timePoint.classList.toggle("hidden");
}

getTime()
toggleTimePoint()
setInterval(getTime, 1000)
setInterval(toggleTimePoint, 1000)