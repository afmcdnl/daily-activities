let Activity = 0
let Duration = 0
function Play_Catch () {
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . . . . .
            . # . . .
            # # # . .
            . # . . .
            # . # . .
            `)
        basic.showLeds(`
            . . . . .
            . # . . .
            # # # # .
            . # . . .
            # . # . .
            `)
        basic.showLeds(`
            . . . . .
            . # . . .
            # # # . #
            . # . . .
            # . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # # #
            . . . # .
            . . # . #
            `)
        basic.showLeds(`
            . . . . .
            . . . # .
            # . # # #
            . . . # .
            . . # . #
            `)
        basic.showLeds(`
            . . . . .
            . . . # .
            . # # # #
            . . . # .
            . . # . #
            `)
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # # #
            . . . # .
            . . # . #
            `)
    }
}
function Push_Up () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # # # #
            # . . # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # # #
            . # . # .
            # . . # .
            `)
    }
}
input.onGesture(Gesture.Shake, function () {
    Activity = randint(0, 3)
    Duration = randint(0, 3)
    if (Activity == 0) {
        Jumping_Jack()
    } else if (Activity == 1) {
        Push_Up()
    } else if (Activity == 2) {
        Sit_up()
    } else {
        Play_Catch()
    }
})
function Sit_up () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # # #
            # # # . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . . # . .
            . . # . .
            # # # . .
            `)
    }
}
function Jumping_Jack () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # . # . #
            . # # # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            . . # . .
            # # # # #
            . . # . .
            . # . # .
            . # . # .
            `)
    }
}
