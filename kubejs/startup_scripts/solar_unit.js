GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('solar_unit')
        .category('solar_unit')      
        .setEUIO('out')              
        .setMaxIOSize(1, 0, 0, 0)    
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BOILER);
});


GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('solar_unit', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
    .recipeModifiers([GTRecipeModifiers.OC_NON_PERFECT])   
    .generator(true) 
    .recipeTypes([GTRecipeTypes.get('solar_unit')])  
        .pattern(definition => FactoryBlockPattern.start()
  .aisle('LLLLL','LLLLL','LLDLL','LLLLL','LLLLL')
  .aisle('LLLLL','LLLLL','LLLLL','LLLLL','LLLLL')
  .aisle('LLLLL','LLLLL','LLLLL','LLLLL','LLILL')
  .aisle('LLLLL','LLLLL','LLLLL','LLLLL','LLLLL')
  .aisle('LLLLL','LLLLL','LL@LL','LLLLL','LLLLL')
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .where('L', Predicates.blocks(GTBlocks.MACHINE_CASING_LV.get()))
            .where('I', Predicates.blocks('gtceu:ulv_input_bus'))
            .where('D', Predicates.abilities(PartAbility.OUTPUT_ENERGY)
            .or(Predicates.abilities(PartAbility.SUBSTATION_OUTPUT_ENERGY))
            .or(Predicates.abilities(PartAbility.OUTPUT_LASER)))
            .build())
        .workableCasingRenderer("gtceu:block/casings/voltage/lv/top",
            "gtceu:block/multiblock/assembly_line", false)
            });
