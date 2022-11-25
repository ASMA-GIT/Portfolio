document.querySelector(".web-dev").style.display="none";
document.querySelector(".blog").style.display="none";
let li1= document.getElementById('#li1');
let li2= document.getElementById('#li2');
let li3= document.getElementById('#li3');
function code(){
    document.querySelector(".code").style.display="block";
    document.querySelector(".web-dev").style.display="none";
    document.querySelector(".blog").style.display="none";
    li1.addClass('active');
}
function web(){
    document.querySelector(".code").style.display="none";
    document.querySelector(".web-dev").style.display="block";
    document.querySelector(".blog").style.display="none";
    li2.addClass('active');
}
function blog(){
    document.querySelector(".code").style.display="none";
    document.querySelector(".web-dev").style.display="none";
    document.querySelector(".blog").style.display="block";
    $this.addClass('active').siblings.removeClass('active')
}

