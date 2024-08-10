import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  organizationName: string = '';
  organizationId: string = '';;
  designation: string = '';


  constructor(private userService:UserService, private router: Router){}

  ngOnInit(): void {
    this.email = this.userService.getEmail() || '';
    // this.email = localStorage.getItem('email') || '';
    this.name = localStorage.getItem('name') || '';
    this.password = localStorage.getItem('password') || '';

    this.organizationName = localStorage.getItem('organizationName') || '';
    this.organizationId = localStorage.getItem('organizationId') || '';
    this.designation = localStorage.getItem('designation') || '';

  }

  email:string = '';
  name:string = '';
  password:string = '';

  signup(){
    localStorage.setItem('email',this.email);
    localStorage.setItem('name', this.name);
    localStorage.setItem('password', this.password);

    localStorage.setItem('organizationName', this.organizationName);
    localStorage.setItem('organizationId', this.organizationId);
    localStorage.setItem('designation', this.designation);

    this.router.navigate(['signup2'])

    
  }

  

}
