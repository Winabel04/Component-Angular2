import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { DeviceService } from '../device.service';
import { Device } from './../models';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css'],
  styles: ['div {border: 2px solid black}', 'div {width:500px}', 'div {border-radius:5px}', 'div {padding:5px}', 'div {margin-top:20px}']
})
export class DeviceDetailsComponent implements OnInit {

    @Input() deviceDetail!: Device;

    @Output() updateDetail = new EventEmitter();

  constructor(
      private route: Router,
      private deviceService: DeviceService
      ) { }

  ngOnInit(): void {
  }

//   updated(id:any){
//     this.updateDetail.emit(id);


//   }

updateList(id:number){
    // this.deviceService.id = this.deviceDetail.id;
    this.route.navigate([`/update/${id}`]);
}

  

}
