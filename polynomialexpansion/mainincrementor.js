var clickData = {
  joules: 0,
  jpc: 1
}
function createJoule() {
  clickData.joules += clickData.jpc
}
var mainUpdate = window.setInterval(function(){ // runs every 10ms, 100 times/sec
  document.getElementById("jouleCount").innerHTML = clickData.joules + "J Generated"
}, 10)
