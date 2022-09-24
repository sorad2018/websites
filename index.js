document.getElementById("submit").addEventListener("click", function(){

    if(document.getElementById("username").value=="takla" && document.getElementById("password").value=="68723m"){

        document.getElementById("posts").style.display="block"
    }else{
        alert("Wrong Username or Password")
    }

    document.getElementById("username").value=''
    document.getElementById("password").value=''


})



document.getElementById("logout").addEventListener("click", function(){

  
    document.getElementById("posts").style.display="none"



})






