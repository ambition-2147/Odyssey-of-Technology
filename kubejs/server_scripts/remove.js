// kubejs/server_scripts/remove_recipes.js
ServerEvents.recipes(event => {
  // 出力だけで消す
  [
    'mekanism:creative_chemical_tank',
    'mekanism:creative_fluid_tank',
    'mekanism:creative_bin',
    'mekanism:creative_energy_cube',
    'enderio:creative_power',
    'draconicevolution:creative_op_capacitor',
    'draconicevolution:creative_capacitor',
    'gtceu:compressed_clay',
    'gtceu:bronze_dust',
    'ae2:creative_energy_cell'
  ].forEach(item => event.remove({ output: item }))

  // 入力と出力を両方指定
  event.remove({ input: 'gtceu:sticky_resin', output: 'gtceu:raw_rubber_dust' })
  event.remove({ input: 'gtceu:nichrome_dust', output: 'gtceu:nickel_dust' ,output:'gtceu:chromium_dust'})
  event.remove({type: 'minecraft:crafting_shaped', output:'gtceu:lv_electric_motor'})
  event.remove({type: 'minecraft:crafting_shaped', output:'gtceu:lv_electric_pump'})
  event.remove({ output:'gtceu:mv_electric_motor'})
  event.remove({ output:'gtceu:mv_electric_pump'})
  event.remove({output:'gtceu:mv_fluid_regulator'})
  event.remove({output:'gtceu:mv_conveyor_module'})
  event.remove({ output:'gtceu:mv_electric_piston'})
  event.remove({output:'gtceu:mv_robot_arm'})
  event.remove({output:'gtceu:kanthal_coil_block'})
  event.remove({output:'gtceu:mv_machine_casing'})
  event.remove({type: 'gtceu:bender', output:'gtceu:aluminium_plate'})
  event.remove({type: 'minecraft:crafting_shaped', output:'gtceu:mv_field_generator'})
  event.remove({type: 'minecraft:crafting_shaped', output:'gtceu:mv_sensor'})
  event.remove({type: 'minecraft:crafting_shaped', output:'gtceu:mv_emitter'})
  event.remove({type: 'minecraft:crafting_shaped', output:'gtceu:mv_machine_casing'})
  event.remove({ output:'gtceu:hv_electric_motor'})
  event.remove({ output:'gtceu:hv_electric_pump'})
  event.remove({output:'gtceu:hv_fluid_regulator'})
  event.remove({output:'gtceu:hv_conveyor_module'})
  event.remove({ output:'gtceu:hv_electric_piston'})
  event.remove({output:'gtceu:hv_robot_arm'})
  event.remove({output:'gtceu:nichrome_coil_block'})
  event.remove({output:'gtceu:hv_machine_casing'})
  event.remove({output:'gtceu:hv_field_generator'})
  event.remove({output:'gtceu:hv_sensor'})
  event.remove({output:'gtceu:hv_emitter'})
  event.remove({output:'gtceu:hv_machine_casing'})
  event.remove({output:'gtceu:cleanroom'})
  event.remove({type: 'gtceu:mixer',output:'gtceu:stainless_steel_dust'})
  event.remove({output:'gtceu:ev_machine_casing'})
  event.remove({type: 'gtceu:bender', output:'gtceu:titanium_plate'})
  event.remove({ output:'gtceu:ev_electric_motor'})
  event.remove({ output:'gtceu:ev_electric_pump'})
  event.remove({output:'gtceu:ev_fluid_regulator'})
  event.remove({output:'gtceu:ev_conveyor_module'})
  event.remove({ output:'gtceu:ev_electric_piston'})
  event.remove({output:'gtceu:ev_robot_arm'})
  event.remove({output:'gtceu:rtm_alloy_coil_block'})
  event.remove({output:'gtceu:ev_machine_casing'})
  event.remove({output:'gtceu:ev_field_generator'})
  event.remove({output:'gtceu:ev_sensor'})
  event.remove({output:'gtceu:ev_emitter'})
  event.remove({output:'gtceu:quantum_star'})
  event.remove({type: 'minecraft:smelting', output: 'gtceu:nickel_ingot'})
  event.remove({type: 'minecraft:blasting', output: 'gtceu:nickel_ingot'})
  event.remove({type: 'minecraft:smelting', output: 'gtceu:molybdenum_ingot'})
  event.remove({type: 'minecraft:blasting', output: 'gtceu:molybdenum_ingot'})
  event.remove({output: 'gtceu:lv_solar_panel'})
  event.remove({output: 'cyclic:magic_net'})
  event.remove({output: 'avaritia:infinity_catalyst'})
  
})
