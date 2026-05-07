function bulb1on() {
  document.getElementById("bulb1").style.backgroundColor = "yellow";
}

function bulb1off() {
  document.getElementById("bulb1").style.backgroundColor = "white";
}

function bulb1red() {
  document.getElementById("bulb1").style.backgroundColor = "red";
}
function bulb1green() {
  document.getElementById("bulb1").style.backgroundColor = "green";
}

function bulbblue() {
  document.getElementById("bulb1").style.backgroundColor = "blue";
}

// document.getElementById("bulbblue").addEventListener("click", bulbblue);

// document.getElementById("bulbcolor").addEventListener("change",changebulbcolor)

document

  .getElementById("bulbcolor")
  .addEventListener("change", changebulbcolor);

function changebulbcolor() {
  const color = document.getElementById("bulbcolor").value;

  document.getElementById("bulb1").style.backgroundColor = color;
}
function changebulbcolor() {
  const color = document.getElementById("bulbcolor").value;

  document.getElementById("abcd").style.backgroundColor = color;
}

function reset() {
  window.location.reload();
}




//task 1




document.getElementById("bgc")
.addEventListener("change", changehe);

function changehe() {

    const color = document.getElementById("bgc").value;

    document.getElementById("he").style.color = color;

}

