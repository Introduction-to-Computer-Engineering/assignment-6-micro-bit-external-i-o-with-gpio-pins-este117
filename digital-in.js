led.enable(false)

class Lights {
     fadeLight() {
        for (let index = 0; index <= 3071; index++) {
            pins.analogWritePin(AnalogPin.P3, index);
            control.waitMicros(750) 
        }
        for (let index = 0; index <= 3071; index++) {
            pins.analogWritePin(AnalogPin.P4, index)
            control.waitMicros(750)
        }
        for (let index = 0; index <= 3071; index++) {
            pins.analogWritePin(AnalogPin.P10, index);
            control.waitMicros(750)
        }
        for (let index = 3071; index >= 0; index--) {
            pins.analogWritePin(AnalogPin.P3, index);
            control.waitMicros(750)
        }
        for (let index = 3071; index >= 0; index--) {
            pins.analogWritePin(AnalogPin.P4, index)
            control.waitMicros(750)
        }
        for (let index = 3071; index >= 0; index--) {
            pins.analogWritePin(AnalogPin.P10, index);
            control.waitMicros(750)
        }
    }
  
  digitalInputPin() {
 
         //checks if input button has been set to 1
         if (pins.digitalReadPin(DigitalPin.P10) == 1) {
             //slowly lights led connected to P6
             for (let index = 0; index <= 3071; index++) {
                 pins.analogWritePin(AnalogPin.P6, index);
             }
             //slowly fades led connected to P6
             for (let index = 3071; index >= 0; index--) {
                 pins.analogWritePin(AnalogPin.P6, index)
             }
         }
         else {
             //If input button has been set to 0, doesn't light P6
             pins.analogWritePin(AnalogPin.P6, 0);
         }
  } 
  
}
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P3, 0);
    pins.analogWritePin(AnalogPin.P4, 0);
    pins.analogWritePin(AnalogPin.P6, 0);
    pins.analogWritePin(AnalogPin.P10, 0);
    let light = new Lights;
    light.fadeLight(); 
})
