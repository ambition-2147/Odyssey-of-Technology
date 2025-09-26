ServerEvents.recipes(event => {
  
  const F = (id, mb) => Fluid.of(id, mb);

    event.recipes.gtceu.centrifuge('rubber_dust')
    .itemInputs('gtceu:sticky_resin')
    .itemOutputs('gtceu:raw_rubber_dust')
    .outputFluids('gtceu:glue 50')
    .chancedOutput('gtceu:plant_ball', 1000, 500,)
    .EUt(32)
    .duration(30)

    event.recipes.gtceu.centrifuge('nickel_dust')
    .itemInputs('3x gtceu:nichrome_dust')
    .itemOutputs('2x gtceu:nickel_dust', 'gtceu:chromium_dust')
    .chancedOutput('2x gtceu:nickel_dust', 500, 500,)
    .EUt(32)
    .duration(20)

    event.shaped(
        Item.of('gtceu:lv_electric_motor', 1),
        [
            'TCS',
            'CSC',
            'SCT'
        ],
        {
            C: 'gtceu:copper_double_wire',
            T: 'gtceu:tin_double_cable',
            S: 'gtceu:steel_rod',
            _: 'minecraft:air'
        }
    )

   event.recipes.gtceu.assembler('lv_solar')
    .itemInputs('25x gtceu:double_iron_plate','10x gtceu:double_copper_plate','gtceu:gold_credit','36x minecraft:glass','18x gtceu:silicone_rubber_ring','gtceu:lv_cadmium_battery','4x gtceu:solar_panel')
    .itemOutputs('gtceu:lv_solar_panel')
    .EUt(32)
    .duration(4800)
  
})