
let startbtn = document.getElementById("start");
let words = document.getElementById("starting-words");
let container = document.getElementById("container");
let countDownDate = new Date("21 Apr,2024 17:00:00").getTime();

let counter = setInterval(() => {

    let dateNow = new Date().getTime();


    let dateDiff = countDownDate - dateNow;

  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

    document.querySelector(".days").innerHTML = days < 10 ? `${days}` : days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (dateDiff <= 1) {
    clearInterval(counter);
    startbtn.classList.remove("close");
    startbtn.classList.add("active");
    container.classList.remove("active");
    container.classList.add("close");
    words.classList.remove("active");
    words.classList.add("close");
    }
}, 1000);