import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { HttpService } from '../http.service';
// import { Post } from '../models';
import { User } from '../models';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

    // posts: Post[] | undefined;
    users?: User[];
    showDetails: boolean  = false;

    selectedUser?: User;

  constructor(
      private http: HttpService,
    //   private router: Router
  ) { }

  ngOnInit(): void {
    this.http.getUsers().subscribe(users => {
        this.users = users as User[];
        console.log(this.users);
    })
  }


  backToUserList(){
      this.showDetails = false;
  }

  detailsViewed(id:number){
    this.showDetails = true;
    this.http.id = this.users?.indexOf;
    console.log("USER_ID " + id);
    let index = this.getDataUsers().findIndex(users => users.id === id);
    this.selectedUser = this.getDataUsers()[index];

}


    getDataUsers(){
        return this.users || []
    }

}

//   detailsViewed(id:number){
//     //   this.showDetails = true;
//     this.router.navigate(['/detailsUpdate']);

//   }


 // this.selectedUser = (this.users || [])[index || -1];
     // let index = this.users?.findIndex(users => users.id === id);
    // let index = this.users?.findIndex(users => users.id === id);
    // this.selectedUser = this.users[index];
    // console.log(this.selectedUser);
    
  // this.router.navigate(['/detailsUpdate']);