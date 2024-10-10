input.onSound(DetectedSound.Loud, function () {
    if (status == 1) {
        aktiv = !(aktiv)
        if (aktiv) {
            startzeit = input.runningTime()
            basic.setLedColor(0x0000ff)
            basic.pause(500)
        } else {
            dauer = input.runningTime() - startzeit
            basic.turnRgbLedOff()
            while (status == 1) {
                basic.showNumber(dauer)
            }
        }
    }
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    status = 1
    basic.setLedColor(0x00ff00)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    status = 0
    basic.setLedColor(0xff0000)
    basic.pause(500)
    basic.turnRgbLedOff()
})
let dauer = 0
let startzeit = 0
let aktiv = false
let status = 0
status = 0
input.setSoundThreshold(SoundThreshold.Loud, 128)
aktiv = false
