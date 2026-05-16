document.getElementById("passform").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const packet = {
        websitename :websitename,
        username:userName,
        password:password,
    };
});

document.getElementById("passform").addEventListener("reset", function(event) {
    event.preventDefault(); 

    document.getElementById("sitename").value = ""; 
    document.getElementById("username").value = ""; 
    document.getElementById("password").value= ""; 


    function savetolocalstorage(packet) {
      const olddata = JSON.parse(localStorage.getItem("passwords")) || [];

      const packetInString = JSON.stringify(packet);

      localStorage.setItem("passwords",packetInString   );

    }

    
});
