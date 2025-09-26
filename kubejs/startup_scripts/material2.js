// 元素の定義
GTCEuStartupEvents.registry('gtceu:element', event => {
    event.create('nexonium')
        .protons(125)
        .neutrons(200)
        .symbol('Nx');
    event.create('valine')
        .protons(4096)
        .neutrons(4096)
        .symbol('Va');
    event.create('advanced_solding_alloy')
        .symbol('RSn');
    event.create('orkeslos')
        .protons(8192)
        .neutrons(8192)
        .symbol('Ø');
})

// マテリアルの定義
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('nexonium')
        .ingot().fluid().dust()
        .color(0x730099)              // 紫色
        .element('nexonium')
        .iconSet('shiny')             // 既存のアイコンセットを使用
        .blastTemp(5000, 'high', 1024, 1200)
        .cableProperties(GTValues.V[GTValues.EV], 32, 1, false)
        .flags(
            GTMaterialFlags.GENERATE_PLATE, 
            GTMaterialFlags.GENERATE_ROD, 
            GTMaterialFlags.GENERATE_GEAR, 
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_FRAME, 
            GTMaterialFlags.GENERATE_DENSE, 
            GTMaterialFlags.GENERATE_ROTOR, 
            GTMaterialFlags.GENERATE_BOLT_SCREW
        )
    event.create('valine3g')
        .ingot().fluid().dust()
        .color(0xff0000)              // 紫色
        .element('valine')
        .iconSet('shiny')             // 既存のアイコンセットを使用
        .blastTemp(5000, 'high', 1024, 1200)
        .cableProperties(GTValues.V[GTValues.MAX], 32, 1, true)
        .flags(
            GTMaterialFlags.GENERATE_PLATE, 
            GTMaterialFlags.GENERATE_ROD, 
            GTMaterialFlags.GENERATE_GEAR, 
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_FRAME, 
            GTMaterialFlags.GENERATE_DENSE, 
            GTMaterialFlags.GENERATE_ROTOR, 
            GTMaterialFlags.GENERATE_BOLT_SCREW
        )

    event.create('advanced_soldering_alloy')
        .ingot().fluid().dust()
        .color(0x666699)              
        .element('advanced_solding_alloy')
        .iconSet('shiny')             
    
        event.create('orkeslos')
        .ingot().fluid().dust()
        .color(0x000066)              // 紫色
        .element('orkeslos')
        .iconSet('shiny')             // 既存のアイコンセットを使用
        .cableProperties(GTValues.V[GTValues.MAX], 32, 1, true)
        .flags(
            GTMaterialFlags.GENERATE_PLATE, 
            GTMaterialFlags.GENERATE_ROD, 
            GTMaterialFlags.GENERATE_GEAR, 
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_FRAME, 
            GTMaterialFlags.GENERATE_DENSE, 
            GTMaterialFlags.GENERATE_ROTOR, 
            GTMaterialFlags.GENERATE_BOLT_SCREW
        )
    })