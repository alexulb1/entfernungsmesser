input.onSound(DetectedSound.Loud, function () {
    aktiv = !(aktiv)
    if (aktiv) {
        startzeit = input.runningTime()
        basic.setLedColor(0x0000ff)
        basic.pause(500)
    } else {
        dauer = input.runningTime() - startzeit
        basic.turnRgbLedOff()
        while (true) {
            basic.showNumber(dauer)
        }
    }
})
let dauer = 0
let startzeit = 0
let aktiv = false
let status = 0
input.setSoundThreshold(SoundThreshold.Loud, 128)
aktiv = false
