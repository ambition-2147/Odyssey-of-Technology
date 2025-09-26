StartupEvents.registry('block', event => {


  event.create('matter_casing') // Create a new block
    .displayName('§l§5Matter Casing') // Set a custom name
    .soundType('metal') // Set a material (affects the sounds and some properties)
    .hardness(100.0) // Set hardness (affects mining time)
    .resistance(1000.0) // Set resistance (to explosions, etc)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock('minecraft:mineable/pickaxe') // or a pickaxe
    .tagBlock('minecraft:needs_diamond_tool') // the tool tier must be at least iron
    .textureAll('kubejs:block/matter_casing')

  event.create('matter_energy_transmitter') // Create a new block
    .displayName('§l§5Matter Energy Transmitter') // Set a custom name
    .soundType('metal') // Set a material (affects the sounds and some properties)
    .hardness(100.0) // Set hardness (affects mining time)
    .resistance(1000.0) // Set resistance (to explosions, etc)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    .tagBlock('minecraft:mineable/pickaxe') // or a pickaxe
    .tagBlock('minecraft:needs_diamond_tool') // the tool tier must be at least iron
    .textureAll('kubejs:block/matter_energy_transmitter')

})

StartupEvents.registry('item',event => {
    event.create('matter_plate').displayName('§l§5Matter Plate')

    event.create('blackhole').displayName('BlackHole')

    event.create('omniverse').displayName('Stable Singularity')

    event.create('energy_catalyst').displayName('§l§6Energy Catalyst')

    event.create('matter_part').displayName('§l§5Matter Frame Part')

    event.create('matter_circit').displayName('§l§5Matter Circit')

    event.create('matter_data').displayName('§l§5Matter Data Bank')
})