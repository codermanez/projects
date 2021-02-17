var gameData = {
  antimass: 0,
  antimassPerClick: 1,
}
var genData = {
  T1amnt: 0,
  T1cost: 100
}
function mineAntimass() {
  gameData.antimass += gameData.antimassPerClick
}
function addGenT1() {
  if (gameData.antimass >= genCosts.T1cost) {
    gameData.antimass -= genData.T1cost
    genData.T1amnt += 1
    if (genData.T1amnt % 10 == 0) {
      genCosts.T1cost *= genData.T1cost * 2.5
    }
  }
  else {
    document.getElementById("genT1btn").innerHTML = "Sorry, not enough Anti-Mass"
    setTimeout(document.getElementById("genT1btn").innerHTML = "Build Anti-Mass Generator Tier 1", 1000)
  }
}
var intervalId = window.setInterval(function(){
  document.getElementById("AntimassGenerated").innerHTML = gameData.antimass + " Anti-Mass Generated"
  document.getElementById("amntGenT1").innerHTML = "Cost: " + genCosts.T1cost + ", You Have" + genData.T1amnt + " Tier 1 Anti-Mass Generators (AMGs)"
  gameData.antimass += genData.T1amnt
}, 10);
