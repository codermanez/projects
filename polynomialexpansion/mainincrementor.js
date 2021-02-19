var clickData = {
  joules: new Decimal("0"),
  jpc: new Decimal("1"),
  costMultiplier: new Decimal("2.5"),
  JGenT1: new Decimal("0"),
  JGenT1Cost: new Decimal("25")
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
var mainUpdate = window.setInterval(function(){ // runs every 10ms, 100 times/sec
  document.getElementById("jouleCount").innerHTML = clickData.joules + "J Generated"
  document.getElementById("JGenT1Count").innerHTML = "Cost: " + clickData.JGenT1Cost + ", You Have " + clickData.JGenT1 + " Tier 1 Energy Generators"
  clickData.joules = clickData.joules.add(clickData.JGenT1)
}, 10)
