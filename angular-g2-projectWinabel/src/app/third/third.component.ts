import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css'],
  styles: ['p {color:purple}']
})
export class ThirdComponent implements OnInit {

    @Output() thirdOutput = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    // alert('test');
    this.thirdOutput.emit('emitted value');

}
}
