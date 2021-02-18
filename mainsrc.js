var gameData = {
  antimass: 0,
  antimassPerClick: 1,
}
var genData = {
  costMultcost: 200,
  origcostMult: 5.0,
  costMult: 5.0,
  costMultamnt: 0,
  costMultperc: 0,
  timeCost: 200,
  origTime: 1,
  time: 1,
  timeAmnt: 0,
  timePerc: 0,
  T1amnt: 0,
  T1cost: 100,
  T2amnt: 0,
  T2cost: 10000,
  T2mult: 20,
  T3amnt: 0,
  T3cost: 1000000,
  T3mult: 2500
}
var superGenData = {
  T1genamnt: 0,
  T1gencost: 1000000,
  T2genamnt: 0,
  T2gencost: 100000000,
  T2genmult: 20,
  T3genamnt: 0,
  T3gencost: 10000000000,
  T3genmult: 2500
}
function mineAntimass() {
  gameData.antimass += gameData.antimassPerClick
}
function costMultReduct() {
  if (gameData.antimass >= genData.costMultcost) {
    gameData.antimass -= genData.costMultcost
    genData.costMultcost *= genData.costMultcost
    genData.costMultamnt += 1
    genData.costMult *= 0.5
    genData.costMultperc = 100 - (genData.costMult / genData.origcostMult * 100)
    }
  }
function timeDiv2() {
  if (gameData.antimass >= genData.timeCost) {
    gameData.antimass -= genData.timeCost
    genData.timeCost *= genData.timeCost
    genData.timeAmnt += 1
    genData.time *= 0.5
    genData.timePerc = 100 - (genData.time / genData.origTime * 100)
    }
  }
function addGenT1() {
  if (gameData.antimass >= genData.T1cost) {
    gameData.antimass -= genData.T1cost
    genData.T1amnt += 1
    if (genData.T1amnt % 10 == 0) {
      genData.T1cost *= genData.T1cost * genData.costMult
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
      genData.T2cost *= genData.T2cost * genData.costMult
    }
  }
  else {
    document.getElementById("genT2btn").innerHTML = "Sorry, not enough Anti-Mass"
    setTimeout(document.getElementById("genT2btn").innerHTML = "Build Anti-Mass Generator Tier 2", 1000)
  }
}
function addGenT3() {
  if (gameData.antimass >= genData.T3cost) {
    gameData.antimass -= genData.T3cost
    genData.T3amnt += 1
    if (genData.T3amnt % 10 == 0) {
      genData.T3cost *= genData.T3cost * genData.costMult
    }
  }
  else {
    document.getElementById("genT3btn").innerHTML = "Sorry, not enough Anti-Mass"
    setTimeout(document.getElementById("genT3btn").innerHTML = "Build Anti-Mass Generator Tier 3", 1000)
  }
}
function addGenT1gens() {
  if (gameData.antimass >= superGenData.T1gencost) {
    gameData.antimass -= superGenData.T1gencost
    superGenData.T1genamnt += 1
    if (superGenData.T1genamnt % 10 == 0) {
      superGenData.T1gencost *= superGenData.T1gencost * genData.costMult
    }
  }
  else {
    document.getElementById("T1genT1btn").innerHTML = "Sorry, not enough Anti-Mass"
    setTimeout(document.getElementById("T1genT1btn").innerHTML = "Build T1 Super Generators Tier 1", 1000)
  }
}
function addGenT2gens() {
  if (gameData.antimass >= superGenData.T2gencost) {
    gameData.antimass -= superGenData.T2gencost
    superGenData.T2genamnt += 1
    if (superGenData.T2genamnt % 10 == 0) {
      superGenData.T2gencost *= superGenData.T2gencost * genData.costMult
    }
  }
  else {
    document.getElementById("T2genT2btn").innerHTML = "Sorry, not enough Anti-Mass"
    setTimeout(document.getElementById("T2genT2btn").innerHTML = "Build T2 Super Generators Tier 2", 1000)
  }
}
function addGenT3gens() {
  if (gameData.antimass >= superGenData.T3gencost) {
    gameData.antimass -= superGenData.T3gencost
    superGenData.T3genamnt += 1
    if (superGenData.T3genamnt % 10 == 0) {
      superGenData.T3gencost *= superGenData.T3gencost * genData.costMult
    }
  }
  else {
    document.getElementById("T1genT3btn").innerHTML = "Sorry, not enough Anti-Mass"
    setTimeout(document.getElementById("T1genT3btn").innerHTML = "Build T3 Super Generators Tier 3", 1000)
  }
}
function cheat() {
  gameData.antimass += 1000000000000000
}
var antimassUpdateTime = genData.time * 10;
var genUpdateTime = genData.time * 1000;
var mainUpdate = window.setInterval(function(){ // runs every 10ms, 100 times/sec
  document.getElementById("AntimassGenerated").innerHTML = gameData.antimass + "g Anti-Mass Generated"
  document.getElementById("efficiency").innerHTML = "Cost: " + genData.costMultcost + "g, You Have " + genData.costMultamnt + " Efficiency Crystals, Which Equals to a " + genData.costMultperc + "% Decrease in Cost"
  document.getElementById("timeDiv").innerHTML = "Cost: " + genData.timeCost + "g, You Have " + genData.timeAmnt + " Fragments of Time, Which Equals to a " + genData.timePerc + "% Decrease in Time"
  document.getElementById("amntGenT1").innerHTML = "Cost: " + genData.T1cost + "g, You Have " + genData.T1amnt + " Tier 1 Anti-Mass Generators (AMGs)"
  document.getElementById("amntGenT2").innerHTML = "Cost: " + genData.T2cost + "g, You Have " + genData.T2amnt + " Tier 2 Anti-Mass Generators (AMGs)"
  document.getElementById("amntGenT3").innerHTML = "Cost: " + genData.T3cost + "g, You Have " + genData.T3amnt + " Tier 3 Anti-Mass Generators (AMGs)"
  document.getElementById("T1amntGenT1").innerHTML = "Cost: " + superGenData.T1gencost + "g, You Have " + superGenData.T1genamnt + " Tier 1 Super Generators"
  document.getElementById("T2amntGenT2").innerHTML = "Cost: " + superGenData.T2gencost + "g, You Have " + superGenData.T2genamnt + " Tier 2 Super Generators"
  document.getElementById("T3amntGenT3").innerHTML = "Cost: " + superGenData.T3gencost + "g, You Have " + superGenData.T3genamnt + " Tier 3 Super Generators"
  gameData.antimass += genData.T1amnt
  gameData.antimass += genData.T2amnt * genData.T2mult
  gameData.antimass += genData.T3amnt * genData.T3mult
}, antimassUpdateTime);
var genUpdate = window.setInterval(function(){ // runs every 1s, as to not overinflate antimass generation
  genData.T1amnt += superGenData.T1genamnt
  genData.T1amnt += superGenData.T2genamnt * superGenData.T2genmult
  genData.T1amnt += superGenData.T3genamnt * superGenData.T3genmult
}, genUpdateTime);
