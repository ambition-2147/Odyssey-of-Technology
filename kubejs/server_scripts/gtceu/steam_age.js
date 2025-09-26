ServerEvents.recipes(event => {
    event.shaped(
        Item.of('gtceu:compressed_clay', 1),
        [
            'WCC',
            '___',
            '___'
        ],
        {
            W: 'gtceu:brick_wooden_form',
            C: 'minecraft:clay_ball',
            _: 'minecraft:air'
        }
    )
    event.shaped(
        Item.of('gtceu:bronze_dust', 1),
        [
            'CCC',
            'CCC',
            'TT_'
        ],
        {
            C: 'gtceu:copper_dust',
            T: 'gtceu:tin_dust',
            _: 'minecraft:air'
        }
    )
                               
})

