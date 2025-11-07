function small_laser_barrage () {
    for (let index = 0; index < 4; index++) {
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
        projectile5 = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 2 2 2 2 . . . 
            . . . . . . . 2 2 1 1 1 1 2 . . 
            . . . . 2 2 3 3 1 1 1 1 1 1 . . 
            . . 3 3 3 3 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 3 3 2 2 3 1 1 1 1 1 1 1 . . 
            . . . . . . 2 2 3 1 1 1 1 2 . . 
            . . . . . . . . . 2 2 2 2 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, 100, 0)
        projectile5.setPosition(0, randint(0, 200))
        pause(250)
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
        proj6 = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 2 2 2 2 . . . 
            . . . . . . . 2 2 1 1 1 1 2 . . 
            . . . . 2 2 3 3 1 1 1 1 1 1 . . 
            . . 3 3 3 3 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 3 3 2 2 3 1 1 1 1 1 1 1 . . 
            . . . . . . 2 2 3 1 1 1 1 2 . . 
            . . . . . . . . . 2 2 2 2 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, 100, 0)
        proj6.setPosition(0, randint(0, 200))
        pause(250)
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
        proj7 = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 2 2 2 2 . . . 
            . . . . . . . 2 2 1 1 1 1 2 . . 
            . . . . 2 2 3 3 1 1 1 1 1 1 . . 
            . . 3 3 3 3 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 3 3 2 2 3 1 1 1 1 1 1 1 . . 
            . . . . . . 2 2 3 1 1 1 1 2 . . 
            . . . . . . . . . 2 2 2 2 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, 100, 0)
        proj7.setPosition(0, randint(0, 200))
    }
}
function Start_Fight () {
    Beat()
    info.setLife(10)
    myEnemy.startEffect(effects.rings, 100000000)
    for (let index = 0; index < 100; index++) {
        pause(10)
        myEnemy.y += 0.4
    }
    for (let index = 0; index < 3; index++) {
        pause(2200)
        Energy_Attack()
        pause(2000)
        small_laser_barrage()
        pause(2000)
        small_laser_barrage()
        GrowAttack()
    }
    YouWin()
}
function GrowAttack () {
    for (let index = 0; index < 4; index++) {
        music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)
        myEnemy.setPosition(randint(0, 100), randint(0, 150))
        pause(1000)
        music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)
        myEnemy.changeScale(2, ScaleAnchor.Middle)
        pause(1000)
        music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)
        myEnemy.setScale(0.4, ScaleAnchor.Middle)
        Laser()
    }
}
function Energy_Attack () {
    myEnemy.follow(i, 5)
    for (let index = 0; index < 2; index++) {
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . 4 4 4 5 5 4 4 4 . . . . 
            . . . 3 3 3 3 4 4 4 4 4 4 . . . 
            . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
            . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
            . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
            . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
            . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
            . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
            . . . 4 2 2 2 2 2 2 2 2 4 . . . 
            . . . . 4 4 2 2 2 2 4 4 . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, myEnemy, 50, 50)
        projectile2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . 4 4 4 5 5 4 4 4 . . . . 
            . . . 3 3 3 3 4 4 4 4 4 4 . . . 
            . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
            . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
            . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
            . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
            . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
            . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
            . . . 4 2 2 2 2 2 2 2 2 4 . . . 
            . . . . 4 4 2 2 2 2 4 4 . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, myEnemy, -50, 50)
        projectile3 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . 5 5 5 2 2 5 5 5 . . . . 
            . . . b b b b 5 5 5 5 5 5 . . . 
            . . 5 b b b b 4 4 4 1 1 5 5 . . 
            . . b b b b b 4 4 4 1 1 2 5 . . 
            . 5 b b b b 4 4 4 4 4 2 2 5 5 . 
            . 5 b b b 4 4 4 5 5 5 5 2 5 5 . 
            . 5 5 b b 4 4 5 5 5 5 5 5 5 5 . 
            . 5 4 b b 4 4 5 5 5 5 5 5 5 5 . 
            . . 5 4 b b 4 5 5 5 5 5 4 5 . . 
            . . 5 4 4 b 4 4 5 5 5 4 5 5 . . 
            . . . 5 4 4 4 4 4 4 4 4 5 . . . 
            . . . . 5 5 4 4 4 4 5 5 . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, myEnemy, -50, -50)
        projectile4 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . 5 5 5 2 2 5 5 5 . . . . 
            . . . b b b b 5 5 5 5 5 5 . . . 
            . . 5 b b b b 4 4 4 1 1 5 5 . . 
            . . b b b b b 4 4 4 1 1 2 5 . . 
            . 5 b b b b 4 4 4 4 4 2 2 5 5 . 
            . 5 b b b 4 4 4 5 5 5 5 2 5 5 . 
            . 5 5 b b 4 4 5 5 5 5 5 5 5 5 . 
            . 5 4 b b 4 4 5 5 5 5 5 5 5 5 . 
            . . 5 4 b b 4 5 5 5 5 5 4 5 . . 
            . . 5 4 4 b 4 4 5 5 5 4 5 5 . . 
            . . . 5 4 4 4 4 4 4 4 4 5 . . . 
            . . . . 5 5 4 4 4 4 5 5 . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, myEnemy, 50, -50)
        pause(500)
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
        projectile = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . 6 6 6 5 5 6 6 6 . . . . 
            . . . 7 7 7 7 6 6 6 6 6 6 . . . 
            . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
            . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
            . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
            . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
            . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
            . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
            . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
            . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
            . . . 6 8 8 8 8 8 8 8 8 6 . . . 
            . . . . 6 6 8 8 8 8 6 6 . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, 50, 50)
        projectile = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . 6 6 6 5 5 6 6 6 . . . . 
            . . . 7 7 7 7 6 6 6 6 6 6 . . . 
            . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
            . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
            . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
            . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
            . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
            . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
            . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
            . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
            . . . 6 8 8 8 8 8 8 8 8 6 . . . 
            . . . . 6 6 8 8 8 8 6 6 . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, -50, -50)
        projectile = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 9 9 9 9 . . . . . . 
            . . . . 9 9 9 4 4 9 9 9 . . . . 
            . . . a a a a 9 9 9 9 9 9 . . . 
            . . 9 a a a a c c c 1 1 9 9 . . 
            . . a a a a a c c c 1 1 4 9 . . 
            . 9 a a a a c c c c c 4 4 9 9 . 
            . 9 a a a c c c 9 9 9 9 4 9 9 . 
            . 9 9 a a c c 9 9 9 9 9 9 9 9 . 
            . 9 8 a a c c 9 9 9 9 9 9 9 9 . 
            . . 9 c a a c 9 9 9 9 9 8 9 . . 
            . . 9 c c a c c 9 9 9 c 9 9 . . 
            . . . 9 c c c c c c c c 9 . . . 
            . . . . 9 9 c c c c 9 9 . . . . 
            . . . . . . 9 9 9 9 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, 50, -50)
        projectile = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 9 9 9 9 . . . . . . 
            . . . . 9 9 9 4 4 9 9 9 . . . . 
            . . . a a a a 9 9 9 9 9 9 . . . 
            . . 9 a a a a c c c 1 1 9 9 . . 
            . . a a a a a c c c 1 1 4 9 . . 
            . 9 a a a a c c c c c 4 4 9 9 . 
            . 9 a a a c c c 9 9 9 9 4 9 9 . 
            . 9 9 a a c c 9 9 9 9 9 9 9 9 . 
            . 9 8 a a c c 9 9 9 9 9 9 9 9 . 
            . . 9 c a a c 9 9 9 9 9 8 9 . . 
            . . 9 c c a c c 9 9 9 c 9 9 . . 
            . . . 9 c c c c c c c c 9 . . . 
            . . . . 9 9 c c c c 9 9 . . . . 
            . . . . . . 9 9 9 9 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, -50, 50)
        pause(500)
    }
}
function Transition () {
    scene.setBackgroundImage(assets.image`thing`)
    pause(1000)
    scene.setBackgroundImage(assets.image`Field5`)
    pause(1000)
    scene.setBackgroundImage(assets.image`Field6`)
    pause(1000)
    scene.setBackgroundImage(assets.image`Blank`)
    pause(5000)
    myEnemy = sprites.create(assets.image`Enemy`, SpriteKind.Enemy)
    myEnemy.setPosition(82, 30)
    i.setPosition(80, 90)
    myEnemy.setScale(0.4, ScaleAnchor.Middle)
    FirstDialogue()
}
function youLose () {
    i.setImage(img`
        2 . . . . f f f f . . . . . . 2 
        . 2 . f f e e e e f f . . 2 2 . 
        . . 2 e e e f f e e e f . 2 . . 
        . f f 2 f f 4 4 f f f 2 2 . . . 
        . f f e 2 2 4 4 e 4 2 f f . . . 
        . f e 4 f 2 f f 4 f 2 e f . . . 
        . f f f 4 4 2 e 2 2 f f f . . . 
        f f e f 4 f e 2 2 4 f e f f . . 
        f e e f f e 2 2 2 2 e e e f . . 
        . f e e e 2 2 e e e 2 e f . . . 
        . . f e 2 2 e e e e e 2 . . . . 
        . e 4 f 2 f f f f f f 4 2 . . . 
        . 4 d 2 2 2 2 2 2 2 f d 4 2 . . 
        . 4 2 2 4 4 4 4 4 4 f 4 4 . 2 . 
        2 2 2 . f f f f f f . . . . . 2 
        2 . . . f f . . f f . . . . . . 
        `)
    game.setGameOverMessage(false, "GETTT DUNKED ON")
    game.gameOver(false)
}
function YouWin () {
    music.stopAllSounds()
    myEnemy.setPosition(80, 90)
    game.showLongText("I will come back for you.", DialogLayout.Bottom)
    music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
    music.play(music.melodyPlayable(music.sonar), music.PlaybackMode.UntilDone)
    game.setGameOverMessage(true, "Star felled.")
    game.gameOver(true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(3000)
})
function Beat () {
    music.play(music.createSong(hex`0078000408020300001c00010a006400f401640000040000000000000000000000000005000004190020002400021d2228002c0001202c003000011d30003400012201001c000f05001202c102c201000405002800000064002800031400060200040f0038003c0001253c004000041d20252905001c000f0a006400f4010a0000040000000000000000000000000000000002260004000800011d08000c00011d0c001000011d10001400011d14001800011d18001c0003202427`), music.PlaybackMode.UntilDone)
    pause(2000)
    music.play(music.createSong(hex`00f00004080a0501001c000f05001202c102c20100040500280000006400280003140006020004480078007c00012088008c00012098009c000120a800ac000120b800bc000120c800cc000120d800dc000120e800ec000120f800fc00012008010c01012018011c01012028012c01012005001c000f0a006400f4010a0000040000000000000000000000000000000002900070007400011d78007c00011d80008400011d88008c00011d90009400011d98009c00011da000a400011da800ac00011db000b400011db800bc00011dc000c400011dc800cc00011dd000d400011dd800dc00011de000e400011de800ec00011df000f400011df800fc00011d00010401011d08010c01011d10011401011d18011c01011d20012401011d28012c01011d06001c00010a006400f401640000040000000000000000000000000000000002cd0070007400012774007800012578007c0001247c008000012280008400012584008800012488008c0001228c009000012090009400012298009c0001229c00a0000120a000a4000122a400a8000124ac00b0000120b400b800011dbc00c000011bc000c400011dc800cc000122d000d4000120d400d8000122d800dc000124e000e4000122e400e8000120ec00f000022224f400f8000124f800fc000125fc000001012400010401012504010801012408010c0101221001140101201401180101221c012001012028012c01012207001c00020a006400f401640000040000000000000000000000000000000003b901000004000224270400080002222508000c000220240c0010000222251000140002202414001800012518001c0001241c0020000222252000240002242724002800012728002c000222252c00300002272a300034000222253400380002252938003c0002272a3c004000022024400044000222254400480002252948004c000220244c005000022225500054000224275400580002252958005c0002222560006400012464006800012568006c0001247000740002292c7400780002272a78007c000225297c0080000224278000840002272a8400880002252988008c000224278c0090000222259000940002242798009c000224279c00a000022225a000a400022427a400a800022529ac00b000022225b400b800021e22bc00c000021d20c000c400021e22c800cc00022427d000d400022225d400d800022427d800dc00022529e000e4000127e400e8000125ec00f00003252729f400f800022529f800fc0002272afc0000010225290001040102272a0401080102252908010c0102242710011401022225140118010224271c01200102222528012c0102242730013401021e223401380102202438013c01021e223c014001021e2208001c000e050046006603320000040a002d00000064001400013200020100020c0060006400012568006c000127`), music.PlaybackMode.LoopingInBackground)
}
info.onLifeZero(function () {
    youLose()
})
function Laser () {
    music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
    projectile6 = sprites.createProjectileFromSprite(img`
        .....231132.....
        .....231132.....
        .....231132.....
        .....231132.....
        .....231132.....
        .....231132.....
        .....231132.....
        .....231132.....
        .....231132.....
        .....231132.....
        .....231132.....
        .....231132.....
        .....231132.....
        .....231132.....
        .....231132.....
        .....231132.....
        .....231132.....
        .....231132.....
        .....231132.....
        .....231132.....
        .....231132.....
        .....231132.....
        .....231132.....
        .....231132.....
        .....231132.....
        .....231132.....
        .....231132.....
        .....231132.....
        .....231132.....
        .....231132.....
        .....231132.....
        .....231132.....
        .....231132.....
        .....231132.....
        .....231132.....
        .....231132.....
        .....231132.....
        .....231132.....
        .....231132.....
        .....231132.....
        .....231132.....
        .....231132.....
        .....231132.....
        .....231132.....
        .....231132.....
        .....231132.....
        .....231132.....
        ...1111111111...
        .11333333333311.
        13...231132...31
        1....231132....1
        1....231132....1
        33...231132...33
        .33223311332233.
        ..222111111222..
        ..211111111112..
        ..211111111112..
        ..333111111333..
        ...3333333333...
        ................
        ................
        ................
        ................
        ................
        `, myEnemy, 0, 50)
}
function Wait () {
    pauseUntil(() => game.runtime() >= 10000)
    Transition()
}
function FirstDialogue () {
    game.setDialogFrame(img`
        1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 
        `)
    game.showLongText("...", DialogLayout.Bottom)
    pause(2000)
    game.showLongText("Die, Mortal.", DialogLayout.Bottom)
    Start_Fight()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(3000)
})
let projectile6: Sprite = null
let projectile4: Sprite = null
let projectile3: Sprite = null
let projectile2: Sprite = null
let projectile: Sprite = null
let myEnemy: Sprite = null
let proj7: Sprite = null
let proj6: Sprite = null
let projectile5: Sprite = null
let i: Sprite = null
i = sprites.create(img`
    ..............ffffff....
    .............f2feeeeff..
    ............f222feeeeff.
    ............feeeeffeeef.
    ...........fe2222eeffff.
    ...........f2effff222ef.
    ...........fffeeefffffff
    ...........fee44fbe44eff
    ............feddf14d4eef
    .............fdddd4eeef.
    .............fe444eddf..
    .............ccc22eddf..
    .............cdc22fee...
    ............cddc4444f...
    ...........cddcfffff....
    ..........cddc..fff.....
    ..........cdc...........
    ..........cc............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
scene.setBackgroundImage(assets.image`Field1`)
controller.moveSprite(i)
i.setPosition(80, 75)
scene.centerCameraAt(80, 75)
tiles.setCurrentTilemap(tilemap`level1`)
Wait()
