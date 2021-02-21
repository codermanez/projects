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
  clickData.JGenT16 = clickData.JGenT16.add(1000000000000000)
  prestige.omega = prestige.omega.add(1000000000000000)
}
var mainUpdate = window.setInterval(function(){ // runs every 10ms, 100 times/sec
  document.getElementById("jouleCount").innerHTML = numberformat.format(clickData.joules, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal}) + "J Generated"
  document.getElementById("JGenT1Count").innerHTML = "Cost: " + numberformat.format(clickData.JGenT1Cost, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal}) + ", You Have " + numberformat.format(clickData.JGenT1, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal}) + " Tier 1 Energy Generators"
  document.getElementById("JGenT2Count").innerHTML = "Cost: " + numberformat.format(clickData.JGenT2Cost, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal}) + ", You Have " + numberformat.format(clickData.JGenT2, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal}) + " Tier 2 Energy Generators"
  document.getElementById("JGenT3Count").innerHTML = "Cost: " + numberformat.format(clickData.JGenT3Cost, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal}) + ", You Have " + numberformat.format(clickData.JGenT3, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal}) + " Tier 3 Energy Generators"
  document.getElementById("JGenT4Count").innerHTML = "Cost: " + numberformat.format(clickData.JGenT4Cost, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal}) + ", You Have " + numberformat.format(clickData.JGenT4, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal}) + " Tier 4 Energy Generators"
  document.getElementById("JGenT5Count").innerHTML = "Cost: " + numberformat.format(clickData.JGenT5Cost, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal}) + ", You Have " + numberformat.format(clickData.JGenT5, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal}) + " Tier 5 Energy Generators"
  document.getElementById("JGenT6Count").innerHTML = "Cost: " + numberformat.format(clickData.JGenT6Cost, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal}) + ", You Have " + numberformat.format(clickData.JGenT6, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal}) + " Tier 6 Energy Generators"
  document.getElementById("JGenT7Count").innerHTML = "Cost: " + numberformat.format(clickData.JGenT7Cost, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal}) + ", You Have " + numberformat.format(clickData.JGenT7, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal}) + " Tier 7 Energy Generators"
  document.getElementById("JGenT8Count").innerHTML = "Cost: " + numberformat.format(clickData.JGenT8Cost, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal}) + ", You Have " + numberformat.format(clickData.JGenT8, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal}) + " Tier 8 Energy Generators"
  document.getElementById("JGenT9Count").innerHTML = "Cost: " + numberformat.format(clickData.JGenT9Cost, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal}) + ", You Have " + numberformat.format(clickData.JGenT9, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal}) + " Tier 1 Super Energy Generators"
  document.getElementById("JGenT10Count").innerHTML = "Cost: " + numberformat.format(clickData.JGenT10Cost, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal}) + ", You Have " + numberformat.format(clickData.JGenT10, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal}) + " Tier 2 Super Energy Generators"
  document.getElementById("JGenT11Count").innerHTML = "Cost: " + numberformat.format(clickData.JGenT11Cost, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal}) + ", You Have " + numberformat.format(clickData.JGenT11, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal}) + " Tier 3 Super Energy Generators"
  document.getElementById("JGenT12Count").innerHTML = "Cost: " + numberformat.format(clickData.JGenT12Cost, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal}) + ", You Have " + numberformat.format(clickData.JGenT12, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal}) + " Tier 4 Super Energy Generators"
  document.getElementById("JGenT13Count").innerHTML = "Cost: " + numberformat.format(clickData.JGenT13Cost, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal}) + ", You Have " + numberformat.format(clickData.JGenT13, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal}) + " Tier 5 Super Energy Generators"
  document.getElementById("JGenT14Count").innerHTML = "Cost: " + numberformat.format(clickData.JGenT14Cost, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal}) + ", You Have " + numberformat.format(clickData.JGenT14, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal}) + " Tier 6 Super Energy Generators"
  document.getElementById("JGenT15Count").innerHTML = "Cost: " + numberformat.format(clickData.JGenT15Cost, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal}) + ", You Have " + numberformat.format(clickData.JGenT15, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal}) + " Tier 7 Super Energy Generators"
  document.getElementById("JGenT16Count").innerHTML = "Cost: " + numberformat.format(clickData.JGenT16Cost, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal}) + ", You Have " + numberformat.format(clickData.JGenT16, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal}) + " Tier 8 Super Energy Generators"
  document.getElementById("alphaCount").innerHTML = "&alpha;: " + numberformat.format(prestige.alpha, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal})
  document.getElementById("betaCount").innerHTML = "&beta;: " + numberformat.format(prestige.beta, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal})
  document.getElementById("gammaCount").innerHTML = "&gamma;: " + numberformat.format(prestige.gamma, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal})
  document.getElementById("deltaCount").innerHTML = "&delta;: " + numberformat.format(prestige.delta, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal})
  document.getElementById("epsilonCount").innerHTML = "&epsilon;: " + numberformat.format(prestige.epsilon, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal})
  document.getElementById("zetaCount").innerHTML = "&zeta;: " + numberformat.format(prestige.zeta, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal})
  document.getElementById("etaCount").innerHTML = "&eta;: " + numberformat.format(prestige.eta, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal})
  document.getElementById("thetaCount").innerHTML = "&theta;: " + numberformat.format(prestige.theta, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal})
  document.getElementById("iotaCount").innerHTML = "&iota;: " + numberformat.format(prestige.iota, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal})
  document.getElementById("kappaCount").innerHTML = "&kappa;: " + numberformat.format(prestige.kappa, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal})
  document.getElementById("lambdaCount").innerHTML = "&lambda;: " + numberformat.format(prestige.lambda, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal})
  document.getElementById("muCount").innerHTML = "&mu;: " + numberformat.format(prestige.mu, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal})
  document.getElementById("nuCount").innerHTML = "&nu;: " + numberformat.format(prestige.nu, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal})
  document.getElementById("xiCount").innerHTML = "&xi;: " + numberformat.format(prestige.xi, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal})
  document.getElementById("omicronCount").innerHTML = "&omicron;: " + numberformat.format(prestige.omicron, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal})
  document.getElementById("piCount").innerHTML = "&pi;: " + numberformat.format(prestige.pi, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal})
  document.getElementById("rhoCount").innerHTML = "&rho;: " + numberformat.format(prestige.rho, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal})
  document.getElementById("sigmaCount").innerHTML = "&sigma;: " + numberformat.format(prestige.sigma, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal})
  document.getElementById("tauCount").innerHTML = "&tau;: " + numberformat.format(prestige.tau, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal})
  document.getElementById("upsilonCount").innerHTML = "&upsilon;: " + numberformat.format(prestige.upsilon, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal})
  document.getElementById("phiCount").innerHTML = "&phi;: " + numberformat.format(prestige.phi, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal})
  document.getElementById("chiCount").innerHTML = "&chi;: " + numberformat.format(prestige.chi, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal})
  document.getElementById("psiCount").innerHTML = "&psi;: " + numberformat.format(prestige.psi, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal})
  document.getElementById("omegaCount").innerHTML = "&omega;: " + numberformat.format(prestige.omega, {backend: 'decimal.js', format: 'engineering', Decimal: Decimal})
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
  prestige.delta = prestige.delta.add(prestige.epsilon)
  prestige.epsilon = prestige.epsilon.add(prestige.zeta)
  prestige.zeta = prestige.zeta.add(prestige.eta)
  prestige.eta = prestige.eta.add(prestige.theta)
  prestige.theta = prestige.theta.add(prestige.iota)
  prestige.iota = prestige.iota.add(prestige.kappa)
  prestige.kappa = prestige.kappa.add(prestige.lambda)
  prestige.lambda = prestige.lambda.add(prestige.mu)
  prestige.mu = prestige.mu.add(prestige.nu)
  prestige.nu = prestige.nu.add(prestige.xi)
  prestige.xi = prestige.xi.add(prestige.omicron)
  prestige.omicron = prestige.omicron.add(prestige.pi)
  prestige.pi = prestige.pi.add(prestige.rho)
  prestige.rho = prestige.rho.add(prestige.sigma)
  prestige.sigma = prestige.sigma.add(prestige.tau)
  prestige.tau = prestige.tau.add(prestige.upsilon)
  prestige.upsilon = prestige.upsilon.add(prestige.phi)
  prestige.phi = prestige.phi.add(prestige.chi)
  prestige.chi = prestige.chi.add(prestige.psi)
  prestige.psi = prestige.psi.add(prestige.omega)
}, 1000)
