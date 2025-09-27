/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Max
 * Created on: Sep 2025
 * This program turns on and off an LED when a button is pressed
*/

input.onButtonPressed(Button.A, () => { // button A input
    pins.digitalWritePin(DigitalPin.P16, 1) // turns on 3.3V output from pin 16
})

input.onButtonPressed(Button.B, () => { // button B input
    pins.digitalWritePin(DigitalPin.P16, 0) // turns off 3.3V output from pin 16
})