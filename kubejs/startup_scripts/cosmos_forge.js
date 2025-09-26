GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('cosmos_forge')
        .category('cosmos')
        .setEUIO('out')
        .setMaxIOSize(12, 12, 6, 6)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC);
            });

GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('cosmos_forge', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes([GTRecipeTypes.get('cosmos_forge')])
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.OC_NON_PERFECT])
        .appearanceBlock(GCYMBlocks.CASING_ATOMIC)
        .pattern(definition => FactoryBlockPattern.start()
  .aisle('_______________','_______________','_______________','_______________','_______________','_______B_______','_______A_______','______AOA______','_______A_______','_______B_______','_______________','_______________','_______________','_______________','_______________')
  .aisle('_______________','_______________','_______________','_______________','_______A_______','______AFA______','______AFA______','____AAFFFAA____','______AFA______','______AFA______','_______A_______','_______________','_______________','_______________','_______________')
  .aisle('_______________','_______________','_______________','_______A_______','______F_F______','_____AF_FA_____','____FF_F_FF____','___A__FLF__A___','____FF_F_FF____','_____AF_FA_____','______F_F______','_______A_______','_______________','_______________','_______________')
  .aisle('_______________','_______________','_______A_______','______FFF______','____G__F__G____','_______L_______','___F__GGG__F___','__ANFLGAGLFNA__','___F__GGG__F___','_______L_______','____G__F__G____','______FFF______','_______A_______','_______________','_______________')
  .aisle('_______________','_______A_______','______F_F______','____G__F__G____','___GXGGGGGXG___','____GGG_GGG____','__F_GG_I_GG_F__','_A_FG_IAI_GF_A_','__F_GG_I_GG_F__','____GGG_GGG____','___GXGGGGGXG___','____G__F__G____','______F_F______','_______A_______','_______________')
  .aisle('_______________','_______A_______','_____AF_FA_____','_______L_______','____GGG_GGG____','__A_G_____G_A__','__F_G_____G_F__','_A_L___C___L_A_','__F_G_____G_F__','__A_G_____G_A__','____GGG_GGG____','_______L_______','_____AF_FA_____','_______A_______','_______________')
  .aisle('_______A_______','______AFA______','____FF_F_FF____','___F__GGG__F___','__F_GG_I_GG_F__','__F_G_____G_F__','_A_G_______G_A_','AFFGI_____IGFFA','_A_G_______G_A_','__F_G_____G_F__','__F_GG_I_GG_F__','___F__GGG__F___','____FF_F_FF____','______AFA______','_______Q_______')
  .aisle('______AAA______','____AAF_FAA____','___A__FFF__A___','__AFFLGAGLFFA__','_A_FG_IAI_GF_A_','_A_L___C___L_A_','AFFGI_____IGFFA','ZFLAAC_U_CAALFZ','AFFGI_____IGFFA','_A_L___C___L_A_','_A_FG_IAI_GF_A_','__AFFLGAGLFFA__','___A__FFF__A___','____AAF_FAA____','______QMQ______')
  .aisle('_______A_______','______AFA______','____FF_F_FF____','___F__GGG__F___','__F_GG_I_GG_F__','__F_G_____G_F__','_A_G_______G_A_','AFFGI_____IGFFA','_A_G_______G_A_','__F_G_____G_F__','__F_GG_I_GG_F__','___F__GGG__F___','____FF_F_FF____','______AFA______','_______Q_______')
  .aisle('_______________','_______A_______','_____AF_FA_____','_______L_______','____GGG_GGG____','__A_G_____G_A__','__F_G_____G_F__','_A_L___C___L_A_','__F_G_____G_F__','__A_G_____G_A__','____GGG_GGG____','_______L_______','_____AF_FA_____','_______A_______','_______________')
  .aisle('_______________','_______A_______','______F_F______','____G__F__G____','___GXGGGGGXG___','____GGG_GGG____','__F_GG_I_GG_F__','_A_FG_IAI_GF_A_','__F_GG_I_GG_F__','____GGG_GGG____','___GXGGGGGXG___','____G__F__G____','______F_F______','_______A_______','_______________')
  .aisle('_______________','_______________','_______A_______','______FFF______','____G__F__G____','_______L_______','___F__GGG__F___','__ANFLGAGLFNA__','___F__GGG__F___','_______L_______','____G__F__G____','______FFF______','_______A_______','_______________','_______________')
  .aisle('_______________','_______________','_______________','_______A_______','______F_F______','_____AF_FA_____','____FF_F_FF____','___A__FLF__A___','____FF_F_FF____','_____AF_FA_____','______F_F______','_______A_______','_______________','_______________','_______________')
  .aisle('_______________','_______________','_______________','_______________','_______A_______','______AFA______','______AFA______','____AAFFFAA____','______AFA______','______AFA______','_______A_______','_______________','_______________','_______________','_______________')
  .aisle('_______________','_______________','_______________','_______________','_______________','_______B_______','_______A_______','______BSB______','_______A_______','_______B_______','_______________','_______________','_______________','_______________','_______________')
.where('S', Predicates.controller(Predicates.blocks(definition.get())))
            .where('A', Predicates.blocks('gtceu:atomic_casing'))
            .where('B', Predicates.blocks('gtceu:uhv_input_hatch'))
            .where('C', Predicates.blocks('mekanism:supercharged_coil')) // 追加
            .where('F', Predicates.blocks('gtceu:fusion_casing_mk3'))
            .where('G', Predicates.blocks('connectedglass:clear_glass_black'))
            .where('I', Predicates.blocks('mekanism_extras:infinite_induction_cell'))
            .where('L', Predicates.blocks('gtceu:fusion_glass'))
            .where('M', Predicates.blocks('gtceu:maintenance_hatch'))
            .where('N', Predicates.blocks('gtceu:fusion_coil'))
            .where('O', Predicates.blocks('gtceu:uhv_output_hatch'))
            .where('Q', Predicates.blocks('gtceu:uhv_input_hatch_4')) // 追加
            .where('Z', Predicates.blocks('gtceu:uhv_4096a_laser_target_hatch')) // 追加
            .where('X', Predicates.blocks('kubejs:xenoverse_block'))
            .where('U', Predicates.blocks('kubejs:universe_block')) // 追加
            .where('_', Predicates.any()) // 必要に応じて追加
            .where(' ', Predicates.any()) // 既存
            .where('#', Predicates.air())
            .build())
        .workableCasingRenderer("gtceu:block/casings/gcym/atomic_casing",
            "gtceu:block/multiblock/assembly_line", false)
            });
