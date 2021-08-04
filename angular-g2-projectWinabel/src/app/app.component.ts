import { Component } from '@angular/core';
import { Device } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles:['h1,h3 {text-align:center}']
  
  
})

export class AppComponent {

    //   title = 'angular-g2-projectWinabel';
    title = 'My First Angular Component';

  

 devices: Device[] = [
        {
            // id:1,
          name:  "Device01",
          brand: "Lenovo",
          model: "ITZ400",
          year: 2021,
          serial: "123456ertyy"
        },
        {
            // id:2,
          name:  "Device02",
          brand: "Dell",
          model: "Latitude",
          year: 2014,
          serial: "asdfqwe11111"
        }
    ]

    // updateDevice(value:number){
    //     this.showUpdate=true;
    //     console.log(value);
    //     this.deviceDetail = this.devices.find(device => device.id === value);
    //   }
    //   addNewDevice(devices:Device){
    //     this.devices.push(devices);
    //   }
    //   updateDisplay(value: any){
    //     this.showUpdate=false;
    //     let index=this.devices.findIndex(device => device.id == value.id);
    //     this.devices[index] = value;
    //     console.log(value, 'app');
    //   }

      
}


//   updateDevice(value:number){
    //     this.showUpdate=true;
    //     console.log(value);
    //     this.deviceDetail = this.devices.find(device => device.id === value);
    //   }
    //   addNewDevice(devices:Device){
    //     this.devices.push(devices);
    //   }
    //  updateDisplay(value: any){
    //   this.showUpdate=false;
    //   console.log(value, 'app');
    //  }





 // @Output() buttonEvent= new EventEmitter();

   
//     countDisplay = 0;


//     addCount(){
//         this.countDisplay++;
//     }
  
//     subCount(){
//         this.countDisplay--;
//     }
// }

// import { Component,Output, EventEmitter } from '@angular/core';
// // import { Device } from './models';


// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   @Output() buttonEvent= new EventEmitter();

//   title = "My first Angular Component.";
//   appMessage = "from AppComponent to FirstComponent";
//   counter=0;

// addCount(){
//   this.buttonEvent.emit(this.counter++);
// }

// subCount(){
//   this.buttonEvent.emit(this.counter--);

// }
//   appEvent(event: any){
//     // alert('AppComponent event');
//     alert(event);
//   }
//   showComponent = true;

//   showHide() {
//     this.showComponent = !this.showComponent;
//   }