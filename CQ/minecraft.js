let timer = document.getElementById("timer");
let number = timer.innerHTML;
console.log(number);
let inter = window.setInterval(countDown,1000);
function countDown() {
    timer.innerHTML--; 
    if (Number(timer.innerHTML)===0) {
        clearInterval(inter); 
        minecraft_dying_screen(); 
    }
}; 


function minecraft_dying_screen() {
        minecraft.classList.remove("close");
        minecraft.classList.add("active");
        console.log("done");
    }

