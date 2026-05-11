function addnewtask() {
  const tasktoadd = document.getElementById("newtask").value;

  const LI = document.createElement("li");
  LI.classlist.add("my-3");

  const DIV = document.createElement("div");
  DIV.classlist.add("d-flex", "justify-content-between", "align-items-center");

  const SPAN1 = document.createElement("span");
  SPAN1.innerText = tasktoadd;
  const BUTTON = document.createElement("button");
  BUTTON.classlist.add(
    "btn",
    "btn-danger",
    "ms-4",
    "d-flex",
    "gap-3",
    "align-items-center",
    "justify-content-center",
  );

  BUTTON.onclick = () => LI.remove();

  const I = document.createElement("i");
  I.classList.add("bi", "bi-trash");

  const SPAN2 = document.createElement("span");
  SPAN2.innerText = "Delete";

  BUTTON.appendChild(I);
  BUTTON.appendChild(SPAN2);

  DIV.appendChild(SPAN1);
  DIV.appendChild(BUTTON);

  LI.appendChild(DIV);
  document.getElementById("tasklist").appendChild(LI);
  document.getElementById("newtask").value = "";



}
