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
    noble.on('stateChange', state => {
        console.log(`State changed: ${state}`)
        if (state === 'poweredOn') {
            noble.startScanning()
        }
    })
    let seviceJson = [];
    noble.on('discover', peripheral =>{
        console.log(`Found device, name: ${peripheral.advertisement.localName}, uuid: ${peripheral.uuid}, RSSI: ${peripheral.rssi}`);
        if(peripheral.uuid === DEVICEUUID){
            noble.stopScanning();
            peripheral.on('connect', () => console.log('Device connected'))
            peripheral.on('disconnect', () => console.log('Device disconnected'))
            //TODO: add details for discovered device
            peripheral.connect(error => {
                console.log('found');
                peripheral.discoverServices([DEVICE_INFORMATION_SERVICE_UUID], (error, services) => {
                    let currServiceJson = {
                        "name": services[0].name,
                        "uuid": services[0].uuid,
                        "type": services[0].type
                    }
                    console.log(`Found service, name: ${services[0].name}, uuid: ${services[0].uuid}, type: ${services[0].type}`)
                    seviceJson.push(currServiceJson);
                })

            });
        }
    });
    return seviceJson;
}

module.exports.ScanDevices = ScanDevices;
module.exports.TrackDevice = TrackDevice;
