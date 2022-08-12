music.playMelody("D E G A B B A A ", 250)
basic.forever(function () {
	
})
control.inBackground(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.setGroup(1)
        radio.sendNumber(0)
    }
})
