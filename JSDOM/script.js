function submit() {
  console.log("submit button clicked");

  const fn = document.getElementById("fullname").value;
  console.log(fn);

 
  

  document.getElementById("datacard").classList.add("divshow");
  document.getElementById("datav=card").classList.removemove("divhide");
}
