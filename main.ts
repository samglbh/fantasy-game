function stat_screen () {
    scene.setBackgroundColor(13)
    tiles.setCurrentTilemap(tilemap`level2`)
}
function randomise_weapon (staff: boolean, img2: Image) {
    if (staff == true) {
        if (randint(0, 10) <= 5) {
            img2 = img`
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
            img2 = img`
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
            img2 = img`
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
            img2 = img`
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
let img2: Image = null
img2 = img`
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
