document.getElementById("redbox").addEventListener("mouseover",fillredcolor);
document.getElementById("redbox").addEventListener("mouseout",fillbasecolor);

document
  .getElementById("greenbox")
  .addEventListener("mouseover",fillgreencolor);
document.getElementById("greenbox").addEventListener("mouseout",fillbasecolor);

document.getElementById("bluebox").addEventListener("mouseover",fillbluecolor);

document.getElementById("bluebox").addEventListener("mouseout",fillbasecolor);

document.getElementById("violetbox").addEventListener("mouseover",fillvioletcolor);
document.getElementById("violet").addEventListener("mouseout",fillbasecolor);

function fillredcolor() {
  document.getElementById("bulb1").style.backgroundColor = "red";
}

function fillbluecolor() {
  document.getElementById("bulb1").style.backgroundColor = "blue";
}

function fillgreencolor() {
  document.getElementById("bulb1").style.backgroundColor = "green";
}

function fillvioletcolor() {
  document.getElementById("bulb1").style.backgroundColor = "violet";
}

function fillbasecolor() {
  document.getElementById("bulb1").style.backgroundColor = "white";
}
