function nextTime() {
  var text = "Welcome!";
  var text2 = "CYBERQUEST";
  return text,text2;

}

quirky = nextTime();
quirky = String(quirky);

var speed = 75;
var i = 0;

function typeWriter() {
  if (i < quirky.length) {
    document.getElementById("form").innerHTML += quirky.charAt(i);
    document.getElementById("event-name").innerHTML += quirky.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

