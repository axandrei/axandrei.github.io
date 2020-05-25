function buttonMessage() {
  
alert("De ce apesi?");
  
}

function buttonMessage2() {
  
alert("Mai apesi mult pe butoane?");
  
}

function cineEsti() {
let val=prompt("Cine esti?");
document.getElementById("salut").innerHTML="Salut " + val;  
}

function ceFaci() {
let val=prompt("Ce mai faci?");
document.getElementById("bine").innerHTML="Daca faci" + val + "eu fac bine";
 
}


function ceCautiAici() {
let val=prompt("Ce cauti aici?");
document.getElementById("oke").innerHTML="Nu o sa gasesti" + val + "aici";
  
}
