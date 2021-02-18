var clickData = {
  joules: new Decimal("0"),
  jpc: new Decimal("1")
}
function createJoule() {
  clickData.joules.add(clickData.jpc)
}
var mainUpdate = window.setInterval(function(){ // runs every 10ms, 100 times/sec
  document.getElementById("jouleCount").innerHTML = clickData.joules + "J Generated"
}, 10)
