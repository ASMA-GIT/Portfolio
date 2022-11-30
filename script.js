document.querySelector(".web-dev").style.display="none";
document.querySelector(".blog").style.display="none";
document.querySelector("#li1").style.background="rgb(60, 60, 255)"; 
document.querySelector("#li2").style.background="#1f1e1e";
document.querySelector("#li3").style.background="#1f1e1e";
function code(){
    document.querySelector(".code").style.display="block";
    document.querySelector(".web-dev").style.display="none";
    document.querySelector(".blog").style.display="none"; 
    document.querySelector("#li1").style.background="rgb(60, 60, 255)";   
    document.querySelector("#li2").style.background="#1f1e1e";
    document.querySelector("#li3").style.background="#1f1e1e";
}
function web(){
    document.querySelector(".code").style.display="none";
    document.querySelector(".web-dev").style.display="block";
    document.querySelector(".blog").style.display="none";
    document.querySelector("#li2").style.background="rgb(60, 60, 255)";   
    document.querySelector("#li1").style.background="#1f1e1e";
    document.querySelector("#li3").style.background="#1f1e1e";
}
function blog(){
    document.querySelector(".code").style.display="none";
    document.querySelector(".web-dev").style.display="none";
    document.querySelector(".blog").style.display="block";
    document.querySelector("#li3").style.background="rgb(60, 60, 255)";   
    document.querySelector("#li2").style.background="#1f1e1e";
    document.querySelector("#li1").style.background="#1f1e1e";
}

