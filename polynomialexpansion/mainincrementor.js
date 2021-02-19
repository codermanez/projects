var clickData = {
  joules: new Decimal("0"),
  jpc: new Decimal("1"),
  costMultiplier: new Decimal("2.5"),
  JGenT1: new Decimal("0"),
  JGenT1Cost: new Decimal("25"),
  JGenT1Mult: new Decimal("1"),
  JGenT2: new Decimal("0"),
  JGenT2Cost: new Decimal("2000"),
  JGenT2Mult: new Decimal("1")
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
var mainUpdate = window.setInterval(function(){ // runs every 10ms, 100 times/sec
  document.getElementById("jouleCount").innerHTML = clickData.joules + "J Generated"
  document.getElementById("JGenT1Count").innerHTML = "Cost: " + clickData.JGenT1Cost + ", You Have " + clickData.JGenT1 + " Tier 1 Energy Generators"
  document.getElementById("JGenT2Count").innerHTML = "Cost: " + clickData.JGenT2Cost + ", You Have " + clickData.JGenT2 + " Tier 2 Energy Generators"
  clickData.joules = clickData.joules.add(clickData.JGenT1.mul(clickData.JGenT1Mult))
}, 10)
var genUpdate = window.setInterval(function(){
  clickData.JGenT1 = clickData.JGenT1.add(clickData.JGenT2.mul(clickData.JGenT2Mult))
}, 1000)
