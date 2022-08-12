radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("" + (receivedNumber))
    basic.pause(2000)
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
})
basic.showLeds(`
    . # . # .
    # . # . #
    # . . . #
    . # . # .
    . . # . .
    `)
music.playMelody("D E G A B B A A ", 250)
radio.setGroup(1)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        radio.setGroup(1)
        radio.sendNumber(1)
    }
    if (input.buttonIsPressed(Button.B)) {
        music.playTone(330, music.beat(BeatFraction.Whole))
        radio.setGroup(1)
        radio.sendNumber(0)
    }
    basic.pause(200)
})
