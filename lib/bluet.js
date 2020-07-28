const arrayBufferToHex = require('array-buffer-to-hex')
const noble = require('noble-mac');
const DEVICE_INFORMATION_SERVICE_UUID = '180a'

function ScanDevices(numOfDevices) {
    noble.on('stateChange', state => {
        console.log(`State changed: ${state}`)
        if (state === 'poweredOn') {
            noble.startScanning()
        }
    })
    let devicesJson = [];
    noble.on('discover', peripheral => {
        let currDeviceDetails = {
            "name": peripheral.advertisement.localName,
            "uuid": peripheral.uuid,
            "rssi": peripheral.rssi
        }
        devicesJson.push(currDeviceDetails);
        if(devicesJson.length >= numOfDevices){
            noble.stopScanning();
        }
        console.log(`Found device, name: ${peripheral.advertisement.localName}, uuid: ${peripheral.uuid}, RSSI: ${peripheral.rssi}`);
    });
    return devicesJson;
}

function TrackDevice(DEVICEUUID) {
    noble.on('discover', peripheral =>{
        if(peripheral.uuid === DEVICEUUID){
            noble.stopScanning();
            //TODO: add details for discovered device
        }
    })
}

module.exports.ScanDevices = ScanDevices;
