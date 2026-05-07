document.getElementById("bgc").addEventListener("change" , ChangebtnColor)
document.getElementById("h").addEventListener("change" , ChangebtnColor)
document.getElementById("p").addEventListener("change" , ChangebtnColor)

function ChangebtnColor(){

    const backgroundColor = document.getElementById("bgc").value
    document.getElementById("leftPart").style.backgroundColor = backgroundColor;

    const headingColor = document.getElementById("h").value
    document.getElementById("heading").style.color = headingColor;

    const paragraphColor = document.getElementById("p").value
    document.getElementById("para").style.color = paragraphColor;

}

function reset(){
    window.location.reload();
}