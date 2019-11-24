led.enable(false)
pins.analogWritePin(AnalogPin.P6, 0)
pins.analogWritePin(AnalogPin.P8, 0)
pins.analogWritePin(AnalogPin.P9, 0)

class Lights {
    
    swirl() {
    for (let x = 0; x <= 4; x++) {
        led.plot(x, 0)
        led.plot(0, 4 - x)
        led.plot(4 - x, 4)
        led.plot(4, x)
        basic.pause(50)
        led.unplot(x, 0)
        led.unplot(4 - x, 4)
        led.unplot(0, 4 - x)
        led.unplot(4, x)
        basic.pause(50)
    }
        
        
        
}
    
    
    
    
}


basic.forever(function () {

    //set pins that will be used to 0
    pins.analogWritePin(AnalogPin.P0, 0);
    pins.analogWritePin(AnalogPin.P2, 0);
    pins.analogWritePin(AnalogPin.P3, 0);
    pins.analogWritePin(AnalogPin.P6, 0);

    //flashes the three leds
    let light = new LightUpLED;
    light.flash();//runs flash function
    light.eachLedLight();//runs eachLedLight function

})


basic.forever(function () {
    
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P2, 0)
    pins.analogWritePin(AnalogPin.P3, 0)
    
    let light = new LightUpLED;
    light.flash();//runs flash function
    light.eachLedLight();//runs eachLedLight function
    
}
