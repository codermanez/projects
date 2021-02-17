var gameData = {
  antimass: 0,
  antimassPerClick: 1
}
function mineAntimass() {
  gameData.antimass += gameData.antimassPerClick
}
function updateScript() {
  document.getElementById("goldMined").innerHTML = gameData.antimass + " Anti-Mass Mined"
}
var intervalId = window.setInterval(updateScript, 10);
