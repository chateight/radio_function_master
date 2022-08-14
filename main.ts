radio.onReceivedString(function (receivedString) {
    music.playTone(523, music.beat(BeatFraction.Whole))
    basic.showString(receivedString)
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
radio.setTransmitPower(7)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        radio.setGroup(1)
        radio.sendString("hello!")
    }
    if (input.buttonIsPressed(Button.B)) {
        music.playTone(330, music.beat(BeatFraction.Whole))
        radio.setGroup(1)
        radio.sendString("bye")
    }
    basic.pause(200)
})
