import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { MockDataService } from 'src/app/Services/mock-data.service';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  email:string = "";
  phonenumber:string = "";
  userExists: boolean | null = null;



  constructor(private mockDataService: MockDataService, private router: Router, private userService: UserService) {}

  checkUser() {
    if (this.email) {
      const user = this.mockDataService.getUserByEmail(this.email);
      this.userExists = !!user;
    } else if (this.phonenumber) {
      const user = this.mockDataService.getUserByPhone(this.phonenumber);
      this.userExists = !!user;
    } else {
      alert('Please enter Email or Phone Number');
      return;
    }

       // Store email in the service
       this.userService.setEmail(this.email);

   
    if (this.userExists) {
      this.router.navigate(['/login', this.email]);
    } else {
      this.router.navigate(['/signup', this.email]);
    }
  }



}

// export class users{
//   constructor(public email:string, public phonenumber:string){
//   }

