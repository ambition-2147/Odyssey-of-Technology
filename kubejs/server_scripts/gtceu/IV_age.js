ServerEvents.recipes(event => {
  
  const F = (id, mb) => Fluid.of(id, mb);

    event.recipes.gtceu.comet('quantum_star')
    .itemInputs('16x minecraft:nether_star','kubejs:blackhole')
    .inputFluids('gtceu:radon_difluoride 1875')
    .chancedOutput('gtceu:quantum_star', 7500, 0,)
    .EUt(16384)
    .duration(480)

})