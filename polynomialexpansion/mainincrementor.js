var clickData = {
  joules: new Decimal("0"),
  jpc: new Decimal("1"),
  costMultiplier: new Decimal("2.5"),
  JGenT1: new Decimal("0"),
  JGenT1Cost: new Decimal("25"),
  JGenT1Mult: new Decimal("1"),
  JGenT2: new Decimal("0"),
  JGenT2Cost: new Decimal("2000"),
  JGenT2Mult: new Decimal("1"),
  JGenT3: new Decimal("0"),
  JGenT3Cost: new Decimal("500000"),
  JGenT3Mult: new Decimal("1"),
  JGenT4: new Decimal("0"),
  JGenT4Cost: new Decimal("25000000"),
  JGenT4Mult: new Decimal("1"),
  JGenT5: new Decimal("0"),
  JGenT5Cost: new Decimal("5000000000"),
  JGenT5Mult: new Decimal("1"),
  JGenT6: new Decimal("0"),
  JGenT6Cost: new Decimal("200000000000"),
  JGenT6Mult: new Decimal("1"),
  JGenT7: new Decimal("0"),
  JGenT7Cost: new Decimal("25000000000000"),
  JGenT7Mult: new Decimal("1"),
  JGenT8: new Decimal("0"),
  JGenT8Cost: new Decimal("5000000000000000"),
  JGenT8Mult: new Decimal("1")
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
function cheat() {
  clickData.joules.add(new Decimal("ee100"))
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
}, 1000)
