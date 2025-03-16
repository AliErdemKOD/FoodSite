var kara = document.getElementById("moon");
var acik = document.getElementById("sun");


function karanlik(){
    document.getElementsByTagName("body")[0].style.color = "white";
    document.getElementsByTagName("body")[0].style.backgroundColor = "black";
    document.getElementById("loginButton").style.color = "white";
    document.getElementById("mainImg").style.filter = "drop-shadow(0px 0px 10px orange)";
    document.getElementById("hakImg").style.filter = "drop-shadow(0px 0px 10px orange)";

    
    kara.style.display = "none";
    acik.style.display = "block";

    const navlink = document.querySelectorAll("nav ul li a");
    navlink.forEach(link => link.style.color = "white");  
    
}

function aydinlik(){
    document.getElementsByTagName("body")[0].style.color = "black";
    document.getElementsByTagName("body")[0].style.backgroundColor = "white";
    document.getElementById("loginButton").style.color = "black";
    document.getElementById("mainImg").style.filter ="none";
    document.getElementById("hakImg").style.filter ="none";


    kara.style.display = "block";
    acik.style.display = "none";

    const navlink = document.querySelectorAll("nav ul li a");
    navlink.forEach(link => link.style.color = "black");  
}