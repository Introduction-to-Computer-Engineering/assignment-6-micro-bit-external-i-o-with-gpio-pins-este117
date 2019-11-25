let buttonPressed = 0

pins.digitalWritePin(DigitalPin.P2, 0)
pins.digitalWritePin(DigitalPin.P3, 0)

basic.forever(function() {
    if (pins.analogReadPin(AnalogPin.P2) > 1000) {
        if (buttonPressed == 0) {
            buttonPressed += 1
         if (buttonPressed == 1) {
            pins.digitalWritePin(DigitalPin.P3, 1)
            led.plot(1, 1)
            }
        }
        } else {
            if (buttonPressed == 1) {
            buttonPressed += -1
            if (buttonPressed == 0) {
            pins.digitalWritePin(DigitalPin.P3, 0)
            led.unplot(1, 1)
          }
       }
    }
})
