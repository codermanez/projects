var gameData = {
  antimass: 0,
  antimassPerClick: 1
}
function mineAntimass() {
  gameData.antimass += gameData.antimassPerClick
}
var intervalId = window.setInterval(function(){
  document.getElementById("AntimassGenerated").innerHTML = gameData.antimass + " Anti-Mass Generated"
}, 10);
