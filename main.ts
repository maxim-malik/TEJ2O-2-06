/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Max
 * Created on: Sep 2025
 * This program turns on and off an LED when a button is pressed
*/

// button A input
input.onButtonPressed(Button.A, () => { 
    // turns on 3.3V output from pin 16
    pins.digitalWritePin(DigitalPin.P16, 1)
})

// button B input
input.onButtonPressed(Button.B, () => { 

    // turns off 3.3V output from pin 16
    pins.digitalWritePin(DigitalPin.P16, 0) 
})