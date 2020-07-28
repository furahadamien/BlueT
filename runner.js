const path = require('path');
const blueTracker = require('./lib/bluet')
//blueTracker.ScanDevices(5)
blueTracker.TrackDevice('e43936e2c80c446ca4ba762b6d8c565f');

module.exports = numOfDevices => blueTracker.ScanDevices(numOfDevices);
module.exports = DEVICEUUID => blueTracker.TrackDevice(DEVICEUUID);