import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DeviceService } from '../device.service';
import { Device } from './../models';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
  
})
export class TemplateFormComponent implements OnInit {

    @Output() deviceDetail = new EventEmitter();

  constructor(
      private router: Router,
      private deviceService: DeviceService
      ) { }

  ngOnInit(): void {
  }

  addDevice(form: NgForm){
    // alert('add device');
    // console.log(form.value);
    // this.deviceDetails.emit(form.value);
    form.value.id = this.deviceService.getNewId();
    this.deviceService.addDevice(form.value);
    this.router.navigate(['/list']);
  }

//   addDevice(device:Device){
//     this.DeviceDetails.push(device);
//   }

}

// import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import {NgForm} from '@angular/forms';
// @Component({
//   selector: 'app-template-form',
//   templateUrl: './template-form.component.html',
//   styleUrls: ['./template-form.component.css']
// })
// export class TemplateFormComponent implements OnInit {
//   @Output() deviceDetails = new EventEmitter();

//   constructor() { }

//   ngOnInit(): void {
//   }
 
//   addDevice(form:NgForm){
//     // alert("Add Device");
//     // console.log(form.value);
//     this.deviceDetails.emit(form.value);
//   }
// }
