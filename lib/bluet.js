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
    let seviceJson = [];
    noble.on('discover', peripheral =>{
        if(peripheral.uuid === DEVICEUUID){
            noble.stopScanning();
            //TODO: add details for discovered device
            peripheral.connect(error => {
                peripheral.discoverServices([DEVICE_INFORMATION_SERVICE_UUID], (error, services) => {
                    let currServiceJson = {
                        "name": services[0].name,
                        "uuid": services[0].uuid,
                        "type": services[0].type
                    }
                    seviceJson.push(currServiceJson);
                })

            });

        }
    });
    return seviceJson;
}

module.exports.ScanDevices = ScanDevices;
module.exports.TrackDevice = TrackDevice;
