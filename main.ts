namespace SpriteKind {
    export const Human = SpriteKind.create()
    export const Cow = SpriteKind.create()
    export const Asteroid = SpriteKind.create()
}
function astroid () {
    asteroid = sprites.createProjectile(sprites.space.spaceAsteroid0, -10, 10, SpriteKind.Asteroid)
    asteroid.say("Crash")
}
function create_huan () {
    human = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . . 4 . . . 4 . . . . . . 
        . . . . . 4 . . . 4 . . . . . . 
        . . . . . 4 . . . 4 . . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . 4 . 4 . 4 . . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . 4 . 4 . . . . . . . 
        . . . . . 4 . . . 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Human)
    human.setPosition(20, 30)
    human.say("Hello!")
}
function make_cow () {
    cow = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . e . e e . e . . . . . . . 
        . . e . e e d e . e . d d d . . 
        . . . e f e f d e d d d d d d . 
        . . . e e e e e e d d d d d d . 
        . . . e 3 3 e e d d e e d e e d 
        . . . . e e e d d d d d e d d d 
        . . . . . . . d d e d d d d d d 
        . . . . . . . . d d d d d d d d 
        . . . . . . . . . d . . . . d . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Cow)
    cow.setPosition(50, 80)
    cow.say("Moo")
}
let cow: Sprite = null
let human: Sprite = null
let asteroid: Sprite = null
create_huan()
make_cow()
astroid()
