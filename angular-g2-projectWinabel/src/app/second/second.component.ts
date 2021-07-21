import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-second',
  template:'<p>Second Works! <br><br> {{secondMessage ? secondMessage: "____________"}}</p>',
  styles:['p {color:red}']
})
export class SecondComponent {

    @Input() secondMessage = "";

}
