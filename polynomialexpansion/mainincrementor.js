var clickData = {
  joules: new Decimal("0"),
  jpc: new Decimal("1"),
  costMultiplier: new Decimal("2.5"),
  JGenT1: new Decimal("0"),
  JGenT1Cost: new Decimal("10"),
  JGenT1Mult: new Decimal("1"),
  JGenT2: new Decimal("0"),
  JGenT2Cost: new Decimal("1000"),
  JGenT2Mult: new Decimal("1"),
  JGenT3: new Decimal("0"),
  JGenT3Cost: new Decimal("100000"),
  JGenT3Mult: new Decimal("1"),
  JGenT4: new Decimal("0"),
  JGenT4Cost: new Decimal("10000000"),
  JGenT4Mult: new Decimal("1"),
  JGenT5: new Decimal("0"),
  JGenT5Cost: new Decimal("1000000000"),
  JGenT5Mult: new Decimal("1"),
  JGenT6: new Decimal("0"),
  JGenT6Cost: new Decimal("100000000000"),
  JGenT6Mult: new Decimal("1"),
  JGenT7: new Decimal("0"),
  JGenT7Cost: new Decimal("10000000000000"),
  JGenT7Mult: new Decimal("1"),
  JGenT8: new Decimal("0"),
  JGenT8Cost: new Decimal("1000000000000000"),
  JGenT8Mult: new Decimal("1"),
  JGenT9: new Decimal("0"),
  JGenT9Cost: new Decimal("1e17"),
  JGenT9Mult: new Decimal("1"),
  JGenT10: new Decimal("0"),
  JGenT10Cost: new Decimal("1e19"),
  JGenT10Mult: new Decimal("1"),
  JGenT11: new Decimal("0"),
  JGenT11Cost: new Decimal("1e21"),
  JGenT11Mult: new Decimal("1"),
  JGenT12: new Decimal("0"),
  JGenT12Cost: new Decimal("1e23"),
  JGenT12Mult: new Decimal("1"),
  JGenT13: new Decimal("0"),
  JGenT13Cost: new Decimal("1e25"),
  JGenT13Mult: new Decimal("1"),
  JGenT14: new Decimal("0"),
  JGenT14Cost: new Decimal("1e27"),
  JGenT14Mult: new Decimal("1"),
  JGenT15: new Decimal("0"),
  JGenT15Cost: new Decimal("1e29"),
  JGenT15Mult: new Decimal("1"),
  JGenT16: new Decimal("0"),
  JGenT16Cost: new Decimal("1e31"),
  JGenT16Mult: new Decimal("1")
}
function createJoule() {
  clickData.joules = clickData.joules.add(clickData.jpc)
}
function addgenT1() {
  if (clickData.joules.gte(clickData.JGenT1Cost)) {
    clickData.joules = clickData.joules.sub(clickData.JGenT1Cost)
    clickData.JGenT1 = clickData.JGenT1.add(1)
    clickData.JGenT1Cost = clickData.JGenT1Cost.pow(1.05).mul(clickData.costMultiplier).ceil()
  }
}
function addgenT2() {
  if (clickData.joules.gte(clickData.JGenT2Cost)) {
    clickData.joules = clickData.joules.sub(clickData.JGenT2Cost)
    clickData.JGenT2 = clickData.JGenT2.add(1)
    clickData.JGenT2Cost = clickData.JGenT2Cost.pow(1.05).mul(clickData.costMultiplier).ceil()
  }
}
function addgenT3() {
  if (clickData.joules.gte(clickData.JGenT3Cost)) {
    clickData.joules = clickData.joules.sub(clickData.JGenT3Cost)
    clickData.JGenT3 = clickData.JGenT3.add(1)
    clickData.JGenT3Cost = clickData.JGenT3Cost.pow(1.05).mul(clickData.costMultiplier).ceil()
  }
}
function addgenT4() {
  if (clickData.joules.gte(clickData.JGenT4Cost)) {
    clickData.joules = clickData.joules.sub(clickData.JGenT4Cost)
    clickData.JGenT4 = clickData.JGenT4.add(1)
    clickData.JGenT4Cost = clickData.JGenT4Cost.pow(1.05).mul(clickData.costMultiplier).ceil()
  }
}
function addgenT5() {
  if (clickData.joules.gte(clickData.JGenT5Cost)) {
    clickData.joules = clickData.joules.sub(clickData.JGenT5Cost)
    clickData.JGenT5 = clickData.JGenT5.add(1)
    clickData.JGenT5Cost = clickData.JGenT5Cost.pow(1.05).mul(clickData.costMultiplier).ceil()
  }
}
function addgenT6() {
  if (clickData.joules.gte(clickData.JGenT6Cost)) {
    clickData.joules = clickData.joules.sub(clickData.JGenT6Cost)
    clickData.JGenT6 = clickData.JGenT6.add(1)
    clickData.JGenT6Cost = clickData.JGenT6Cost.pow(1.05).mul(clickData.costMultiplier).ceil()
  }
}
function addgenT7() {
  if (clickData.joules.gte(clickData.JGenT7Cost)) {
    clickData.joules = clickData.joules.sub(clickData.JGenT7Cost)
    clickData.JGenT7 = clickData.JGenT7.add(1)
    clickData.JGenT7Cost = clickData.JGenT7Cost.pow(1.05).mul(clickData.costMultiplier).ceil()
  }
}
function addgenT8() {
  if (clickData.joules.gte(clickData.JGenT8Cost)) {
    clickData.joules = clickData.joules.sub(clickData.JGenT8Cost)
    clickData.JGenT8 = clickData.JGenT8.add(1)
    clickData.JGenT8Cost = clickData.JGenT8Cost.pow(1.05).mul(clickData.costMultiplier).ceil()
  }
}
function addgenT9() {
  if (clickData.joules.gte(clickData.JGenT9Cost)) {
    clickData.joules = clickData.joules.sub(clickData.JGenT9Cost)
    clickData.JGenT9 = clickData.JGenT9.add(1)
    clickData.JGenT9Cost = clickData.JGenT9Cost.pow(1.05).mul(clickData.costMultiplier).ceil()
  }
}
function addgenT10() {
  if (clickData.joules.gte(clickData.JGenT10Cost)) {
    clickData.joules = clickData.joules.sub(clickData.JGenT10Cost)
    clickData.JGenT10 = clickData.JGenT10.add(1)
    clickData.JGenT10Cost = clickData.JGenT10Cost.pow(1.05).mul(clickData.costMultiplier).ceil()
  }
}
function addgenT11() {
  if (clickData.joules.gte(clickData.JGenT11Cost)) {
    clickData.joules = clickData.joules.sub(clickData.JGenT11Cost)
    clickData.JGenT11 = clickData.JGenT11.add(1)
    clickData.JGenT11Cost = clickData.JGenT11Cost.pow(1.05).mul(clickData.costMultiplier).ceil()
  }
}
function addgenT12() {
  if (clickData.joules.gte(clickData.JGenT12Cost)) {
    clickData.joules = clickData.joules.sub(clickData.JGenT12Cost)
    clickData.JGenT12 = clickData.JGenT12.add(1)
    clickData.JGenT12Cost = clickData.JGenT12Cost.pow(1.05).mul(clickData.costMultiplier).ceil()
  }
}
function addgenT13() {
  if (clickData.joules.gte(clickData.JGenT13Cost)) {
    clickData.joules = clickData.joules.sub(clickData.JGenT13Cost)
    clickData.JGenT13 = clickData.JGenT13.add(1)
    clickData.JGenT13Cost = clickData.JGenT13Cost.pow(1.05).mul(clickData.costMultiplier).ceil()
  }
}
function addgenT14() {
  if (clickData.joules.gte(clickData.JGenT14Cost)) {
    clickData.joules = clickData.joules.sub(clickData.JGenT14Cost)
    clickData.JGenT14 = clickData.JGenT14.add(1)
    clickData.JGenT14Cost = clickData.JGenT14Cost.pow(1.05).mul(clickData.costMultiplier).ceil()
  }
}
function addgenT15() {
  if (clickData.joules.gte(clickData.JGenT15Cost)) {
    clickData.joules = clickData.joules.sub(clickData.JGenT15Cost)
    clickData.JGenT15 = clickData.JGenT15.add(1)
    clickData.JGenT15Cost = clickData.JGenT15Cost.pow(1.05).mul(clickData.costMultiplier).ceil()
  }
}
function addgenT16() {
  if (clickData.joules.gte(clickData.JGenT16Cost)) {
    clickData.joules = clickData.joules.sub(clickData.JGenT16Cost)
    clickData.JGenT16 = clickData.JGenT16.add(1)
    clickData.JGenT16Cost = clickData.JGenT16Cost.pow(1.05).mul(clickData.costMultiplier).ceil()
  }
}
function cheat() {
  var cheatnum = new Decimal("1e1000")
  clickData.joules.add(cheatnum)
}
var mainUpdate = window.setInterval(function(){ // runs every 10ms, 100 times/sec
  document.getElementById("jouleCount").innerHTML = clickData.joules + "J Generated"
  document.getElementById("JGenT1Count").innerHTML = "Cost: " + clickData.JGenT1Cost + ", You Have " + clickData.JGenT1 + " Tier 1 Energy Generators"
  document.getElementById("JGenT2Count").innerHTML = "Cost: " + clickData.JGenT2Cost + ", You Have " + clickData.JGenT2 + " Tier 2 Energy Generators"
  document.getElementById("JGenT3Count").innerHTML = "Cost: " + clickData.JGenT3Cost + ", You Have " + clickData.JGenT3 + " Tier 3 Energy Generators"
  document.getElementById("JGenT4Count").innerHTML = "Cost: " + clickData.JGenT4Cost + ", You Have " + clickData.JGenT4 + " Tier 4 Energy Generators"
  document.getElementById("JGenT5Count").innerHTML = "Cost: " + clickData.JGenT5Cost + ", You Have " + clickData.JGenT5 + " Tier 5 Energy Generators"
  document.getElementById("JGenT6Count").innerHTML = "Cost: " + clickData.JGenT6Cost + ", You Have " + clickData.JGenT6 + " Tier 6 Energy Generators"
  document.getElementById("JGenT7Count").innerHTML = "Cost: " + clickData.JGenT7Cost + ", You Have " + clickData.JGenT7 + " Tier 7 Energy Generators"
  document.getElementById("JGenT8Count").innerHTML = "Cost: " + clickData.JGenT8Cost + ", You Have " + clickData.JGenT8 + " Tier 8 Energy Generators"
  document.getElementById("JGenT9Count").innerHTML = "Cost: " + clickData.JGenT9Cost + ", You Have " + clickData.JGenT9 + " Tier 1 Super Energy Generators"
  document.getElementById("JGenT10Count").innerHTML = "Cost: " + clickData.JGenT10Cost + ", You Have " + clickData.JGenT10 + " Tier 2 Super Energy Generators"
  document.getElementById("JGenT11Count").innerHTML = "Cost: " + clickData.JGenT11Cost + ", You Have " + clickData.JGenT11 + " Tier 3 Super Energy Generators"
  document.getElementById("JGenT12Count").innerHTML = "Cost: " + clickData.JGenT12Cost + ", You Have " + clickData.JGenT12 + " Tier 4 Super Energy Generators"
  document.getElementById("JGenT13Count").innerHTML = "Cost: " + clickData.JGenT13Cost + ", You Have " + clickData.JGenT13 + " Tier 5 Super Energy Generators"
  document.getElementById("JGenT14Count").innerHTML = "Cost: " + clickData.JGenT14Cost + ", You Have " + clickData.JGenT14 + " Tier 6 Super Energy Generators"
  document.getElementById("JGenT15Count").innerHTML = "Cost: " + clickData.JGenT15Cost + ", You Have " + clickData.JGenT15 + " Tier 7 Super Energy Generators"
  document.getElementById("JGenT16Count").innerHTML = "Cost: " + clickData.JGenT16Cost + ", You Have " + clickData.JGenT16 + " Tier 8 Super Energy Generators"
  clickData.joules = clickData.joules.add(clickData.JGenT1.mul(clickData.JGenT1Mult))
}, 10)
var genUpdate = window.setInterval(function(){
  clickData.JGenT1 = clickData.JGenT1.add(clickData.JGenT2.mul(clickData.JGenT2Mult))
  clickData.JGenT2 = clickData.JGenT2.add(clickData.JGenT3.mul(clickData.JGenT3Mult))
  clickData.JGenT3 = clickData.JGenT3.add(clickData.JGenT4.mul(clickData.JGenT4Mult))
  clickData.JGenT4 = clickData.JGenT4.add(clickData.JGenT5.mul(clickData.JGenT5Mult))
  clickData.JGenT5 = clickData.JGenT5.add(clickData.JGenT6.mul(clickData.JGenT6Mult))
  clickData.JGenT6 = clickData.JGenT6.add(clickData.JGenT7.mul(clickData.JGenT7Mult))
  clickData.JGenT7 = clickData.JGenT7.add(clickData.JGenT8.mul(clickData.JGenT8Mult))
  clickData.JGenT8 = clickData.JGenT8.add(clickData.JGenT9.mul(clickData.JGenT9Mult))
  clickData.JGenT9 = clickData.JGenT9.add(clickData.JGenT10.mul(clickData.JGenT10Mult))
  clickData.JGenT10 = clickData.JGenT10.add(clickData.JGenT11.mul(clickData.JGenT11Mult))
  clickData.JGenT11 = clickData.JGenT11.add(clickData.JGenT12.mul(clickData.JGenT12Mult))
  clickData.JGenT12 = clickData.JGenT12.add(clickData.JGenT13.mul(clickData.JGenT13Mult))
  clickData.JGenT13 = clickData.JGenT13.add(clickData.JGenT14.mul(clickData.JGenT14Mult))
  clickData.JGenT14 = clickData.JGenT14.add(clickData.JGenT15.mul(clickData.JGenT15Mult))
  clickData.JGenT15 = clickData.JGenT15.add(clickData.JGenT16.mul(clickData.JGenT16Mult))
}, 1000)
var mainPrestigeUpdate = setInterval(function(){
  clickData.JGenT1Mult = prestige.alpha.add(1)
  clickData.JGenT2Mult = prestige.alpha.add(1)
  clickData.JGenT3Mult = prestige.alpha.add(1)
  clickData.JGenT4Mult = prestige.alpha.add(1)
  clickData.JGenT5Mult = prestige.alpha.add(1)
  clickData.JGenT6Mult = prestige.alpha.add(1)
  clickData.JGenT7Mult = prestige.alpha.add(1)
  clickData.JGenT8Mult = prestige.alpha.add(1)
  clickData.JGenT9Mult = prestige.alpha.add(1)
  clickData.JGenT10Mult = prestige.alpha.add(1)
  clickData.JGenT11Mult = prestige.alpha.add(1)
  clickData.JGenT12Mult = prestige.alpha.add(1)
  clickData.JGenT13Mult = prestige.alpha.add(1)
  clickData.JGenT14Mult = prestige.alpha.add(1)
  clickData.JGenT15Mult = prestige.alpha.add(1)
  clickData.JGenT16Mult = prestige.alpha.add(1)
}, 10)
var sidePrestigeUpdate = setInterval(function(){
  prestige.alpha = prestige.alpha.add(prestige.beta)
  prestige.beta = prestige.beta.add(prestige.gamma)
  prestige.gamma = prestige.gamma.add(prestige.delta)
}, 1000)
