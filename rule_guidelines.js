
let input = document.createElement("input");
let input1 = document.getElementById("input1");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");
let input6 = document.getElementById("input6");
let input8 = document.getElementById("input8");
let input11 = document.getElementById("input11");
let input12 = document.getElementById("input12");
let input13 = document.getElementById("input13");
let input15 = document.getElementById("input15");
let input16 = document.getElementById("input16");
let submit = document.getElementById("submit-button");
let container = document.getElementById("container");
let hacked = document.querySelector(".hacked");
let wrong = document.querySelector(".input");
let wrong_coordinates = document.querySelector(".xyz");
let rules = document.getElementById("start");
let minecraft = document.getElementById("minecraft");
let score = 0 ;

submit.addEventListener("click", () => {
    let value1 = input1.value;
    let value3 = input3.value;
    let value4 = input4.value;
    let value6 = input6.value;
    let value8 = input8.value;
    let value11 = input11.value;
    let value12 = input12.value;
    let value13 = input13.value;
    let value15 = input15.value;
    let value16 = input16.value;
    if (value1 === "3THz_IR") {
        container.classList.remove("active");
        container.classList.add("close");
        hacked.classList.remove("close");
        hacked.classList.add("active");
        score++;
    }else{
        input1.style.border = "2px solid red";
    }
    if (value3 === "Behind_The_Words") {
        container.classList.remove("active");
        container.classList.add("close");
        hacked.classList.remove("close");
        hacked.classList.add("active");
        score++;
    }
    else{
        input3.style.border = "2px solid red";
    }
    if (value4 === "Look_Behind_You") {
        container.classList.remove("active");
        container.classList.add("close");
        hacked.classList.remove("close");
        hacked.classList.add("active");
        score++;
    }
    else{
        input4.style.border = "2px solid red";
    }
    if (value6 === "Look_Behind_You") {
        container.classList.remove("active");
        container.classList.add("close");
        hacked.classList.remove("close");
        hacked.classList.add("active");
        score++;
    }
    else{
        input6.style.border = "2px solid red";
    }
    if (value8 === "Always_Hack") {
        container.classList.remove("active");
        container.classList.add("close");
        hacked.classList.remove("close");
        hacked.classList.add("active");
        score++;
    }
    else{
        input8.style.border = "2px solid red";
    }
    if (value11 === "password_is_password") {
        container.classList.remove("active");
        container.classList.add("close");
        hacked.classList.remove("close");
        hacked.classList.add("active");
        score++;
    }
    else{
        input11.style.border = "2px solid red";
    }
    if (value12 == "deadly_weapon") {
        container.classList.remove("active");
        container.classList.add("close");
        hacked.classList.remove("close");
        hacked.classList.add("active");
        score++;
    }
    else{
        input12.style.border = "2px solid red";
    }
    if (value13 == "The_End") {
        container.classList.remove("active");
        container.classList.add("close");
        hacked.classList.remove("close");
        hacked.classList.add("active");
        score++;
    }
    else{
        input13.style.border = "2px solid red";
    }
    if (value15 === "RUN") {
        container.classList.remove("active");
        container.classList.add("close");
        hacked.classList.remove("close");
        hacked.classList.add("active");
        score++;
    }
    else{
        input15.style.border = "2px solid red";
    }
    if (value16 == "Triumph") {
        container.classList.remove("active");
        container.classList.add("close");
        hacked.classList.remove("close");
        hacked.classList.add("active");
        score++;
    }
    else{
        input16.style.border = "2px solid red";
    }

    /*let value = input.value;
    if (value == "3THz_IR" || value == "Salute_Salute" || value == "Behind_The_Words" || value == "Look_Behind_You" || value == "Always_Hack" || value == "password_is_password" || value == "deadly_weapon" || value == "The_End" || value == "RUN" || value == "Triumph") {
        container.classList.remove("active");
        container.classList.add("close");
        hacked.classList.remove("close");   
        hacked.classList.add("active");
        }else{
        input.style.border = "2px solid red";}
    console.log(value);*/


});



console.log(score);







/*let value = input.value;
    if (value == "3THz_IR" || value == "Salute_Salute" || value == "Behind_The_Words" || value == "Look_Behind_You" || value == "Always_Hack" || value == "password_is_password" || value == "deadly_weapon" || value == "The_End" || value == "RUN" || value == "Triumph") {
        container.classList.remove("active");
        container.classList.add("close");
        hacked.classList.remove("close");   
        hacked.classList.add("active");
        }else{
        input.style.border = "2px solid red";}
    console.log(value);*/ 




/*if (num = 1) {
        if (input.value === "3THz_IR") {
            container.classList.remove("active");
            container.classList.add("close");
            hacked.classList.remove("close");
            hacked.classList.add("active");
        }else{
            input.style.border = "2px solid red";
        }
        
    }


    if (num = 3) {
        if (input.value === "Behind_The_Words") {
            container.classList.remove("active");
            container.classList.add("close");
            hacked.classList.remove("close");
            hacked.classList.add("active");
        }else{
            input.style.border = "2px solid red";
        }
    }

    if (num = 4) {
        if (input.value === "Look_Behind_You") {
            container.classList.remove("active");
            container.classList.add("close");
            hacked.classList.remove("close");
            hacked.classList.add("active");
        }else{
            input.style.border = "2px solid red";
        }
    }
    if (num = 6) {
        if (input.value === "Look_Behind_You") {
            container.classList.remove("active");
            container.classList.add("close");
            hacked.classList.remove("close");
            hacked.classList.add("active");
        }else{
            input.style.border = "2px solid red";
        }
    }

    if (num = 8) {
        if (input.value === "Always_Hack") {
            container.classList.remove("active");
            container.classList.add("close");
            hacked.classList.remove("close");
            hacked.classList.add("active");
        }else{
            input.style.border = "2px solid red";
        }
    }

    if (num = 11) {
        if (input.value === "password_is_password") {
            container.classList.remove("active");
            container.classList.add("close");
            hacked.classList.remove("close");
            hacked.classList.add("active");
        }else{
            input.style.border = "2px solid red";
        }
    }*/ 



