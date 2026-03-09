document.addEventListener("mousemove", function(e){

  const pet = document.getElementById("pet");

  if(!pet) return;

  pet.style.left = e.pageX + 25 + "px";

  pet.style.top = e.pageY + 25 + "px";

});
 