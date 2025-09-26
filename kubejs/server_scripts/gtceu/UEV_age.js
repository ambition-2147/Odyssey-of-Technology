ServerEvents.recipes(event => {
  event.recipes.extendedcrafting.shaped_table("cyclic:magic_net", [
        "  AAAAA  ",
        " ABCDCBA ",
        "ABEEFEEBA",
        "ACEGHGECA",
        "ADFHIHFDA",
        "ACEGHGECA",
        "ABEEFEEBA",
        " ABCDCBA ",
        "  AAAAA  "
    ], {
        A: "avaritia:infinity_catalyst",
        B: "kubejs:cosmic_neutronium_heavy_plating",
        C: "draconicevolution:chaotic_core",
        D: "draconicevolution:reactor_stabilizer",
        E: "draconicevolution:chaotic_crafting_injector",
        F: "exponentialpower:ender_storage",
        G: "kubejs:infinity_coil_block",
        H: "gtceu:dense_nexonium_plate",
        I: "gtceu:max_machine_hull"
    })


    event.recipes.extendedcrafting.shaped_table("avaritia:infinity_catalyst", [
        "A   B   C",
        " D  E  F ",
        "  GHIJK  ",
        "  HLMNJ  ",
        "OPQRSTUVW",
        "  XYZab  ",
        "  cXdbe  ",
        " f  g  h ",
        "i   j   k"
    ], {
        A: "gtceu:assembly_line",
        B: "mekanism_extras:qio_drive_singularity",
        C: "mekanism_extras:infinite_induction_provider",
        D: "gtnn:gooware_mainframe",
        E: "gtceu:naquadria_ingot",
        F: "gtca:quantum_anomaly",
        G: "gtceu:uv_solar_panel",
        H: "gtceu:crystal_matrix_block",
        I: "mekanism_extras:infinite_energy_cube",
        J: "gtceu:draconium_block",
        K: "hyperdaimc:god_sigil",
        L: "kubejs:infinity_coil_block",
        M: "avaritia:record_fragment",
        N: "gtceu:gravi_star",
        O: "extendedcrafting:the_ultimate_catalyst",
        P: "gtceu:max_battery",
        Q: "extendedcrafting:luminessence",
        R: "avaritia:ultimate_stew",
        S: "avaritia:eternal_singularity",
        T: "avaritia:cosmic_meatballs",
        U: "exponentialpower:ender_generator",
        V: "gtceu:ruthenium_trinium_americium_neutronate_ingot",
        W: "gtceu:wetware_processor_mainframe",
        X: "gtceu:cosmic_neutronium_block",
        Y: "gtceu:nan_certificate",
        Z: "avaritia:endest_pearl",
        a: "industrialforegoing:infinity_charger",
        b: "gtceu:awakened_draconium_block",
        c: "gtceu:double_cosmic_neutronium_plate",
        d: "mysticalagriculture:awakened_supremium_furnace",
        e: "industrialforegoing:wither_builder",
        f: "gtceu:neutronium_frame",
        g: "mysticalagriculture:flight_augment",
        h: Item.of("industrialforegoing:infinity_nuke", 1, 
            '{CanCharge:1b,Energy:9223372036854775807L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"ARTIFACT",Special:0b}'),
        i: "draconicevolution:chaotic_core",
        j: "mysticalagradditions:creative_essence",
        k: "kubejs:blackhole"
    })

})
