async function getNewJoke() {

    const API_URL = "https://v2.jokeapi.dev/joke/Any";

   const response = await fetch(API_URL);

    const data = await response.json();


    document.getElementById("setup").innerText = data.setup ;

    document.getElementById("delivery").innerText = data.punchline;

}