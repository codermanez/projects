var clickData = {
  joules: 0,
  jpc: 1
}
function createJoule() {
  OmegaNum.add(joules, jpc)
}
var mainUpdate = window.setInterval(function(){ // runs every 10ms, 100 times/sec
  document.getElementById("AntimassGenerated").innerHTML = clickData.joules + "J Generated"
}, 10)
