input.onButtonPressed(Button.A, function () {
    Binary = 0
    basic.showLeds(`
        . . # . .
        . # . # .
        . # . # .
        . # . # .
        . . # . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("" + control.deviceSerialNumber() + " : " + Binary)
    serial.writeLine("" + control.deviceSerialNumber() + " : " + Binary)
})
input.onButtonPressed(Button.B, function () {
    Binary = 1
    basic.showLeds(`
        . . # . .
        . # # . .
        . . # . .
        . . # . .
        . # # # .
        `)
})
let Binary = 0
radio.setGroup(142)
