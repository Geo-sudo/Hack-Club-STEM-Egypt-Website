
let rules = document.getElementById("start");


function rules_time() {
    rules.classList.remove("close");
    rules.classList.add("active");
}
setTimeout(rules_time, 90000);