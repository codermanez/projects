var gameData = {
  antimass: 0,
  antimassPerClick: 1,
}
var genData = {
  T1amnt: 0,
  T1cost: 100,
  T2amnt: 0,
  T2cost: 10000,
  T2mult: 20
}
function mineAntimass() {
  gameData.antimass += gameData.antimassPerClick
}
function addGenT1() {
  if (gameData.antimass >= genData.T1cost) {
    gameData.antimass -= genData.T1cost
    genData.T1amnt += 1
    if (genData.T1amnt % 10 == 0) {
      genData.T1cost *= genData.T1cost * 2.5
    }
  }
  else {
    document.getElementById("genT1btn").innerHTML = "Sorry, not enough Anti-Mass"
    setTimeout(document.getElementById("genT1btn").innerHTML = "Build Anti-Mass Generator Tier 1", 1000)
  }
}
function addGenT2() {
  if (gameData.antimass >= genData.T2cost) {
    gameData.antimass -= genData.T2cost
    genData.T2amnt += 1
    if (genData.T2amnt % 10 == 0) {
      genData.T2cost *= genData.T2cost * 2.5
    }
  }
  else {
    document.getElementById("genT2btn").innerHTML = "Sorry, not enough Anti-Mass"
    setTimeout(document.getElementById("genT2btn").innerHTML = "Build Anti-Mass Generator Tier 2", 1000)
  }
}
var intervalId = window.setInterval(function(){
  document.getElementById("AntimassGenerated").innerHTML = gameData.antimass + " Anti-Mass Generated"
  document.getElementById("amntGenT1").innerHTML = "Cost: " + genData.T1cost + ", You Have " + genData.T1amnt + " Tier 1 Anti-Mass Generators (AMGs)"
  document.getElementById("amntGenT2").innerHTML = "Cost: " + genData.T2cost + ", You Have " + genData.T2amnt + " Tier 2 Anti-Mass Generators (AMGs)"
  gameData.antimass += genData.T1amnt
  gameData.antimass += genData.T2amnt * genData.T2mult
}, 10);
