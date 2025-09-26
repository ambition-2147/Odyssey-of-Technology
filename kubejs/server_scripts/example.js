
BlockEvents.placed(event => {
    let block = event.block
    let facing = event.player.getFacing()

    // 設置されたブロックの北側のみ異なるテクスチャに変更
    if (block.id === 'kubejs:controller') {
        block.setTexture('north', 'kubejs:block/casingfront')
    }
})
