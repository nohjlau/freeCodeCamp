window.addEventListener('keydown', function(event) {
  if(event.keyCode == 81) 
    play("q");
  if(event.keyCode == 87)
    play("w");
  if(event.keyCode == 69)
    play("e");
  if(event.keyCode == 65)
    play("a");
  if(event.keyCode == 83)
    play("s");
  if(event.keyCode == 68)
    play("d");
  if(event.keyCode == 90)
    play("z");
  if(event.keyCode == 88)
    play("x");
  if(event.keyCode == 67)
    play("c");
})

function play(key) {
  var audio = document.getElementById(key).getElementsByClassName("clip")[0];
  audio.play();
  document.getElementById("display").innerHTML = key.toUpperCase();
}

