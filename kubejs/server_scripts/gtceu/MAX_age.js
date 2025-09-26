ServerEvents.recipes(event => {
    event.shaped(
        "kubejs:energy_catalyst", // 出力アイテム
        [
            "   ",
            " A ",
            "   "
        ],
        {
            A: Item.of("gtceu:max_battery").withNBT({Charge: 9223372036854775807})
        }
    )
})
