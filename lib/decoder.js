//decode data sent from a blue tooth beacon using puck.js libarary
var presses = 0;
NRF.setAdvertising({},{manufacturer: 0x0590, manufacturerData:[presses]});

setWatch(function() {                                                          
  presses++;                                                            
  NRF.setAdvertising({},{manufacturer: 0x0590, manufacturerData:[presses]});   
}, BTN, {edge:"rising", repeat:1, debounce:20})
