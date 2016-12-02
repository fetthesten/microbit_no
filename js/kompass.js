let angle = 0
basic.forever(() => {
    angle = input.compassHeading()
    if (angle < 45) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (angle < 90) {
        basic.showLeds(`
            # . . . .
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (angle < 135) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # . . .
            . . . . .
            . . . . .
            `)
    } else if (angle < 180) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # . . .
            # . . . .
            `)
    } else if (angle < 225) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            `)
    } else if (angle < 270) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . # .
            . . . . #
            `)
    } else if (angle < 315) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . # #
            . . . . .
            . . . . .
            `)
    } else if (angle < 360) {
        basic.showLeds(`
            . . . . #
            . . . # .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # . # #
            . # # # .
            . . # . .
            `)
    }
})
