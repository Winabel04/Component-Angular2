import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

    //   title = 'angular-g2-projectWinabel';
    title = 'My First Angular Component';
    appMessage ="";

    appEvent(event:any){
        this.appMessage=event;
    }
}
