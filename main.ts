input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    for (let index = 0; index < 2; index++) {
        music.playTone(147, music.beat(BeatFraction.Whole))
        music.playTone(147, music.beat(BeatFraction.Whole))
        music.playTone(156, music.beat(BeatFraction.Whole))
        music.playTone(165, music.beat(BeatFraction.Whole))
        for (let index = 0; index < 2; index++) {
            music.playTone(196, music.beat(BeatFraction.Whole))
            music.playTone(165, music.beat(BeatFraction.Whole))
        }
        music.playTone(165, music.beat(BeatFraction.Whole))
        music.playTone(165, music.beat(BeatFraction.Whole))
        music.playTone(156, music.beat(BeatFraction.Whole))
        music.playTone(147, music.beat(BeatFraction.Whole))
        music.playTone(220, music.beat(BeatFraction.Whole))
        music.playTone(147, music.beat(BeatFraction.Whole))
        music.playTone(220, music.beat(BeatFraction.Whole))
    }
})
basic.forever(function () {
	
})
