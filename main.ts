scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (add_points >= 1) {
            end += 1
            add_points += -1
            stat_screen()
        }
    }
})
function stat_screen () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f 1 f . . . . . . . 
        . . . . . . f 1 f . . . . . . . 
        . . . . . . f 1 f . . . . . . . 
        . . . . . f 1 1 1 f . . . . . . 
        . . . . . f 1 1 1 f . . . . . . 
        . . . . f 1 1 1 1 1 f . . . . . 
        . . . . f 1 1 1 1 1 f . . . . . 
        . . . . f f f 1 f f f . . . . . 
        . . . . . . f 1 f . . . . . . . 
        . . . . . . f 1 f . . . . . . . 
        . . . . . . f 1 f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        `)
    scene.setBackgroundColor(13)
    tiles.setCurrentTilemap(tilemap`level2`)
    if (dex == 0) {
        tiles.setTileAt(tiles.getTileLocation(3, 2), assets.tile`myTile5`)
    } else if (dex == 1) {
        tiles.setTileAt(tiles.getTileLocation(3, 2), assets.tile`myTile6`)
    } else if (dex == 2) {
        tiles.setTileAt(tiles.getTileLocation(3, 2), assets.tile`myTile7`)
    } else if (dex == 3) {
        tiles.setTileAt(tiles.getTileLocation(3, 2), assets.tile`myTile8`)
    } else if (dex == 4) {
        tiles.setTileAt(tiles.getTileLocation(3, 2), assets.tile`myTile9`)
    } else if (dex == 5) {
        tiles.setTileAt(tiles.getTileLocation(3, 2), assets.tile`myTile10`)
    } else if (dex == 6) {
        tiles.setTileAt(tiles.getTileLocation(3, 2), assets.tile`myTile11`)
    } else if (dex == 7) {
        tiles.setTileAt(tiles.getTileLocation(3, 2), assets.tile`myTile12`)
    } else if (dex == 8) {
        tiles.setTileAt(tiles.getTileLocation(3, 2), assets.tile`myTile13`)
    } else if (dex == 9) {
        tiles.setTileAt(tiles.getTileLocation(3, 2), assets.tile`myTile14`)
    } else if (dex == 10) {
        tiles.setTileAt(tiles.getTileLocation(3, 2), assets.tile`myTile15`)
    } else if (dex == 11) {
        tiles.setTileAt(tiles.getTileLocation(3, 2), assets.tile`myTile16`)
    } else {
        tiles.setTileAt(tiles.getTileLocation(3, 2), assets.tile`myTile17`)
    }
    if (vit == 0) {
        tiles.setTileAt(tiles.getTileLocation(3, 8), assets.tile`myTile5`)
    } else if (vit == 1) {
        tiles.setTileAt(tiles.getTileLocation(3, 8), assets.tile`myTile6`)
    } else if (vit == 2) {
        tiles.setTileAt(tiles.getTileLocation(3, 8), assets.tile`myTile7`)
    } else if (vit == 3) {
        tiles.setTileAt(tiles.getTileLocation(3, 8), assets.tile`myTile8`)
    } else if (vit == 4) {
        tiles.setTileAt(tiles.getTileLocation(3, 8), assets.tile`myTile9`)
    } else if (vit == 5) {
        tiles.setTileAt(tiles.getTileLocation(3, 8), assets.tile`myTile10`)
    } else if (vit == 6) {
        tiles.setTileAt(tiles.getTileLocation(3, 8), assets.tile`myTile11`)
    } else if (vit == 7) {
        tiles.setTileAt(tiles.getTileLocation(3, 8), assets.tile`myTile12`)
    } else if (vit == 8) {
        tiles.setTileAt(tiles.getTileLocation(3, 8), assets.tile`myTile13`)
    } else if (vit == 9) {
        tiles.setTileAt(tiles.getTileLocation(3, 8), assets.tile`myTile14`)
    } else if (vit == 10) {
        tiles.setTileAt(tiles.getTileLocation(3, 8), assets.tile`myTile15`)
    } else if (vit == 11) {
        tiles.setTileAt(tiles.getTileLocation(3, 8), assets.tile`myTile16`)
    } else {
        tiles.setTileAt(tiles.getTileLocation(3, 8), assets.tile`myTile17`)
    }
    if (str == 0) {
        tiles.setTileAt(tiles.getTileLocation(3, 4), assets.tile`myTile5`)
    } else if (str == 1) {
        tiles.setTileAt(tiles.getTileLocation(3, 4), assets.tile`myTile6`)
    } else if (str == 2) {
        tiles.setTileAt(tiles.getTileLocation(3, 4), assets.tile`myTile7`)
    } else if (str == 3) {
        tiles.setTileAt(tiles.getTileLocation(3, 4), assets.tile`myTile8`)
    } else if (str == 4) {
        tiles.setTileAt(tiles.getTileLocation(3, 4), assets.tile`myTile9`)
    } else if (str == 5) {
        tiles.setTileAt(tiles.getTileLocation(3, 4), assets.tile`myTile10`)
    } else if (str == 6) {
        tiles.setTileAt(tiles.getTileLocation(3, 4), assets.tile`myTile11`)
    } else if (str == 7) {
        tiles.setTileAt(tiles.getTileLocation(3, 4), assets.tile`myTile12`)
    } else if (str == 8) {
        tiles.setTileAt(tiles.getTileLocation(3, 4), assets.tile`myTile13`)
    } else if (str == 9) {
        tiles.setTileAt(tiles.getTileLocation(3, 4), assets.tile`myTile14`)
    } else if (str == 10) {
        tiles.setTileAt(tiles.getTileLocation(3, 4), assets.tile`myTile15`)
    } else if (str == 11) {
        tiles.setTileAt(tiles.getTileLocation(3, 4), assets.tile`myTile16`)
    } else {
        tiles.setTileAt(tiles.getTileLocation(3, 4), assets.tile`myTile17`)
    }
    if (end == 0) {
        tiles.setTileAt(tiles.getTileLocation(3, 6), assets.tile`myTile5`)
    } else if (end == 1) {
        tiles.setTileAt(tiles.getTileLocation(3, 6), assets.tile`myTile6`)
    } else if (end == 2) {
        tiles.setTileAt(tiles.getTileLocation(3, 6), assets.tile`myTile7`)
    } else if (end == 3) {
        tiles.setTileAt(tiles.getTileLocation(3, 6), assets.tile`myTile8`)
    } else if (end == 4) {
        tiles.setTileAt(tiles.getTileLocation(3, 6), assets.tile`myTile9`)
    } else if (end == 5) {
        tiles.setTileAt(tiles.getTileLocation(3, 6), assets.tile`myTile10`)
    } else if (end == 6) {
        tiles.setTileAt(tiles.getTileLocation(3, 6), assets.tile`myTile11`)
    } else if (end == 7) {
        tiles.setTileAt(tiles.getTileLocation(3, 6), assets.tile`myTile12`)
    } else if (end == 8) {
        tiles.setTileAt(tiles.getTileLocation(3, 6), assets.tile`myTile13`)
    } else if (end == 9) {
        tiles.setTileAt(tiles.getTileLocation(3, 6), assets.tile`myTile14`)
    } else if (end == 10) {
        tiles.setTileAt(tiles.getTileLocation(3, 6), assets.tile`myTile15`)
    } else if (end == 11) {
        tiles.setTileAt(tiles.getTileLocation(3, 6), assets.tile`myTile16`)
    } else {
        tiles.setTileAt(tiles.getTileLocation(3, 6), assets.tile`myTile17`)
    }
}
function randomise_weapon (staff: boolean) {
    if (staff == true) {
        if (randint(0, 10) <= 5) {
            return img`
                . . . . . . . . f f f . . 
                . . . . . . . f e e e f . 
                . . . . . . f e f f f e f 
                . . . . . . f f 6 1 f e f 
                . . . . . . . f 3 6 f e f 
                . . . . . . f f f f e f . 
                . . . . . f e e e e f . . 
                . . . . f e f f f f . . . 
                . . . f c f . . . . . . . 
                . . f c f . . . . . . . . 
                . f c f . . . . . . . . . 
                f c f . . . . . . . . . . 
                f f . . . . . . . . . . . 
                `
        } else {
            return img`
                . . . . . . . . f f f . . 
                . . . . . . . f e e e f . 
                . . . . . . f e f f f e f 
                . . . . . . f f 4 1 f e f 
                . . . . . . . f 5 4 f e f 
                . . . . . . f f f f e f . 
                . . . . . f e e e e f . . 
                . . . . f e f f f f . . . 
                . . . f c f . . . . . . . 
                . . f c f . . . . . . . . 
                . f c f . . . . . . . . . 
                f c f . . . . . . . . . . 
                f f . . . . . . . . . . . 
                `
        }
    } else {
        if (randint(0, 10) <= 5) {
            return img`
                . . . . . . . . . . . . . f f f 
                . . . . . . . . . . . . f b b f 
                . . . . . . . . . . . f b b c f 
                . . . . . . . . . . f b b c f . 
                . . . . . . . . . f b b c f . . 
                . . . . . . . . f b b c f . . . 
                . . f . . . . f b b c f . . . . 
                . f 5 f . . f b b c f . . . . . 
                . f 1 5 f f b b c f . . . . . . 
                . . f 5 5 f b c f . . . . . . . 
                . . . f f 2 f f . . . . . . . . 
                . . f b b f 5 f . . . . . . . . 
                . f e f c f 5 5 f . . . . . . . 
                f e e e f . f 5 5 f . . . . . . 
                f e e f . . . f f . . . . . . . 
                f f f . . . . . . . . . . . . . 
                `
        } else {
            return img`
                . . . . . . . . . . . . . f f f 
                . . . . . . . . . . . . f b b f 
                . 7 7 7 . . . 7 7 . . f b b c f 
                . . . 7 . 7 7 . 7 . f b b c f . 
                . . . . . . . . . f b b c f . . 
                . . . 7 7 . . . f b b c f . . . 
                . . f . 7 . . f b b c f . . . . 
                . f 5 f . . f b b c f . . . . . 
                . f 1 5 f f b b c f . . . 7 7 . 
                . . f 5 5 f b c f . . . . . 7 . 
                . . . f f 2 f f . . . . . . 7 . 
                . . f b b f 5 f . 7 . 7 7 7 7 . 
                . f e f c f 5 5 f . 7 . 7 7 . . 
                f e e e f . f 5 5 f 7 7 . . . . 
                f e e f . . . f f . . 7 7 . . . 
                f f f . . . . . . . . . . . . . 
                `
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile21`, function (sprite, location) {
    if (controller.A.isPressed()) {
        mySprite.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
        tiles.setCurrentTilemap(tilemap`level6`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 0))
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (weapon == img`
        . . . . . . . . f f f . . 
        . . . . . . . f e e e f . 
        . . . . . . f e f f f e f 
        . . . . . . f f 4 1 f e f 
        . . . . . . . f 5 4 f e f 
        . . . . . . f f f f e f . 
        . . . . . f e e e e f . . 
        . . . . f e f f f f . . . 
        . . . f c f . . . . . . . 
        . . f c f . . . . . . . . 
        . f c f . . . . . . . . . 
        f c f . . . . . . . . . . 
        f f . . . . . . . . . . . 
        `) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 3 1 3 . . . . . . . 
            . . . . . . 3 1 3 . . . . . . . 
            . . . . . . 2 1 3 2 . . . . . . 
            . . . . . . 2 1 3 2 . . . . . . 
            . . . . . 2 3 1 1 3 . . . . . . 
            . . . . . 2 1 1 1 3 2 . . . . . 
            . . . . . 3 1 1 1 1 2 . . . . . 
            . . . . 2 1 1 1 1 1 1 2 . . . . 
            . . . . 2 1 1 1 1 1 1 2 . . . . 
            . . . . 2 1 1 1 1 1 1 2 . . . . 
            . . . . 2 1 1 1 1 1 1 2 . . . . 
            . . . . . 2 1 1 1 1 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 0, 50)
    } else if (weapon == img`
        . . . . . . . . . . . . . f f f 
        . . . . . . . . . . . . f b b f 
        . 7 7 7 . . . 7 7 . . f b b c f 
        . . . 7 . 7 7 . 7 . f b b c f . 
        . . . . . . . . . f b b c f . . 
        . . . 7 7 . . . f b b c f . . . 
        . . f . 7 . . f b b c f . . . . 
        . f 5 f . . f b b c f . . . . . 
        . f 1 5 f f b b c f . . . 7 7 . 
        . . f 5 5 f b c f . . . . . 7 . 
        . . . f f 2 f f . . . . . . 7 . 
        . . f b b f 5 f . 7 . 7 7 7 7 . 
        . f e f c f 5 5 f . 7 . 7 7 . . 
        f e e e f . f 5 5 f 7 7 . . . . 
        f e e f . . . f f . . 7 7 . . . 
        f f f . . . . . . . . . . . . . 
        `) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 7 7 . . . . . . . . 
            . . . . . . . 7 7 7 . . . . . . 
            . . . . . . . . . . 7 7 . . . . 
            . . . . . . . . . . . 7 7 . . . 
            . . . . . . . . . . . . 7 7 . . 
            . . . . . . . . . . . . . 7 . . 
            . . . . . . . . . . . . . 7 . . 
            . . . . . . . . . . . . . 7 . . 
            . . . . . . . . . . . . . 7 . . 
            . . . . . . . . . . . . . 7 . . 
            . . . . . . . . . . . . . 7 . . 
            . . . . . . . . . . . . 7 7 . . 
            . . . . . . . . . . . 7 7 . . . 
            . . . . . . . 7 7 7 7 7 . . . . 
            . . . . . . . 7 . . . . . . . . 
            `, mySprite, 0, 50)
    } else if (weapon == img`
        . . . . . . . . f f f . . 
        . . . . . . . f e e e f . 
        . . . . . . f e f f f e f 
        . . . . . . f f 6 1 f e f 
        . . . . . . . f 3 6 f e f 
        . . . . . . f f f f e f . 
        . . . . . f e e e e f . . 
        . . . . f e f f f f . . . 
        . . . f c f . . . . . . . 
        . . f c f . . . . . . . . 
        . f c f . . . . . . . . . 
        f c f . . . . . . . . . . 
        f f . . . . . . . . . . . 
        `) {
        mySprite.setPosition(mySprite.x + 5, 0)
    } else if (weapon == img`
        . . . . . . . . . . . . . f f f 
        . . . . . . . . . . . . f b b f 
        . . . . . . . . . . . f b b c f 
        . . . . . . . . . . f b b c f . 
        . . . . . . . . . f b b c f . . 
        . . . . . . . . f b b c f . . . 
        . . f . . . . f b b c f . . . . 
        . f 5 f . . f b b c f . . . . . 
        . f 1 5 f f b b c f . . . . . . 
        . . f 5 5 f b c f . . . . . . . 
        . . . f f 2 f f . . . . . . . . 
        . . f b b f 5 f . . . . . . . . 
        . f e f c f 5 5 f . . . . . . . 
        f e e e f . f 5 5 f . . . . . . 
        f e e f . . . f f . . . . . . . 
        f f f . . . . . . . . . . . . . 
        `) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            1 1 1 1 1 1 1 1 1 1 1 . . . . . 
            . . . . . . . . . . . . . . . . 
            . 1 1 1 1 1 1 1 1 1 1 1 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 1 1 1 1 1 1 1 1 
            . . . . . . . . . . . . . . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . . . . . . . . . . . . . . . 
            . 1 1 1 1 1 1 1 1 1 1 1 . . . . 
            . . . . . . . . . . . . . . . . 
            1 1 1 1 1 1 1 1 1 1 1 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 0, 50)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (add_points >= 1) {
            str += 1
            add_points += -1
            stat_screen()
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (add_points >= 1) {
            vit += 1
            add_points += -1
            stat_screen()
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    stat_screen()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    if (controller.A.isPressed()) {
        if (add_points >= 1) {
            dex += 1
            add_points += -1
            stat_screen()
        }
    }
})
let projectile: Sprite = null
let mySprite: Sprite = null
let add_points = 0
let vit = 0
let end = 0
let str = 0
let dex = 0
let weapon: Image = null
game.showLongText("do you want a magic staff?", DialogLayout.Top)
story.showPlayerChoices("yes", "no")
if (story.checkLastAnswer("yes")) {
    weapon = randomise_weapon(true)
} else {
    weapon = randomise_weapon(false)
}
let statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.value = 20
statusbar.max = 20
statusbar.setColor(2, 11)
statusbar.setLabel("HP")
statusbar.positionDirection(CollisionDirection.Top)
statusbar.setStatusBarFlag(StatusBarFlag.SmoothTransition, true)
let img2 = img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `
dex = 0
str = 0
end = 0
vit = 0
let mp2 = 0
let lvl = 0
let xp = 0
add_points = 0
add_points += 1
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level4`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(6, 0))
story.startCutscene(function () {
    mySprite.setVelocity(0, 50)
    pause(4500)
    mySprite.setVelocity(0, 0)
    story.spriteSayText(mySprite, "huh, that's very weird.")
    story.spriteSayText(mySprite, "I've never seen a tunnel like that before. ")
    mySprite.setVelocity(0, 50)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 0))
    controller.moveSprite(mySprite)
    tiles.setCurrentTilemap(tilemap`level6`)
    pause(300)
    mySprite.setVelocity(0, 0)
})
