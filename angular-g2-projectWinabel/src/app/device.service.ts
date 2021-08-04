import { Injectable } from '@angular/core';
import { Device } from './models';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

    // id!: number;
    id: number | undefined;

  devices: Device[] = [
    {
        id: 1,
      name:  "Device01",
      brand: "Lenovo",
      model: "ITZ400",
      year: 2021,
      serial: "123456ertyy"
    },
    {
        id:2,
      name:  "Device02",
      brand: "Dell",
      model: "Latitude",
      year: 2014,
      serial: "asdfqwe11111"
    }
  ]

  constructor() { }

  getDevices(){
    return this.devices;
  }

  addDevice(device:Device){
    this.devices.push(device);
    // console.log(this.devices);
  }

  getDevice(id: number){
    //   console.log('SERVICE_ID, id');
    //   return this.devices.find(device => device.id === id)
    return this.devices.find(device => device.id === id);
      
  }

  updateDevice(updateDevice: Device){
      let index = this.devices.findIndex(device => device.id === updateDevice.id)
      this.devices[index] = updateDevice;
  }

  getNewId(): number {
    //   return this.devices [this.devices.length -1].id + 1;
    const index = this.devices.length -1
    return (this.devices[index].id || 0) + 1
  }

}
