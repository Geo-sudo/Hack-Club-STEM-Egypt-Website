
let input = document.getElementById("input");
let submit = document.getElementById("submit-button");
let container = document.getElementById("container");
let hacked = document.querySelector(".hacked");
let wrong = document.querySelector(".input");
let wrong_coordinates = document.querySelector(".xyz");
let rules = document.getElementById("start");
let minecraft = document.getElementById("minecraft");

submit.addEventListener("click", () => {
    let value = input.value;
    if (value == "3THz_IR" || value == "Salute_Salute" || value == "Behind_The_Words" || value == "Look_Behind_You" || value == "Always_Hack" || value == "password_is_password" || value == "deadly_weapon" || value == "The_End" || value == "RUN" || value == "Triumph") {
        container.classList.remove("active");
        container.classList.add("close");
        hacked.classList.remove("close");   
        hacked.classList.add("active");
        }else{
        input.style.border = "2px solid red";}
    console.log(value);
    
});

    inputX.addEventListener("input", checkCoordinates);
    inputY.addEventListener("input", checkCoordinates);
    inputZ.addEventListener("input", checkCoordinates);

    function checkCoordinates() {
        let x_coordinate = inputX.value;
        let y_coordinate = inputY.value;
        let z_coordinate = inputZ.value;

        if (x_coordinate === "44.4" && y_coordinate === "-73.2" && z_coordinate === "21.0") {
            container.classList.remove("active");
            container.classList.add("close");
            hacked.classList.remove("close");
            hacked.classList.add("active");
        } 

        console.log(x_coordinate);
        console.log(y_coordinate);
        console.log(z_coordinate);
    };

function rules_time() {
    rules.classList.remove("close");
    rules.classList.add("active");
}
setTimeout(rules_time, 90000);








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



    console.log("HI");









        

        // Update the countdown every second
            
    






    








