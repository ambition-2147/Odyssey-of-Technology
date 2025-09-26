ServerEvents.recipes(event => {
  
  const F = (id, mb) => Fluid.of(id, mb);


  event.recipes.gtceu.solar_unit('lv_solar')
    .notConsumable('gtceu:lv_solar_panel')
    .EUt(-32)
    .duration(180)


})