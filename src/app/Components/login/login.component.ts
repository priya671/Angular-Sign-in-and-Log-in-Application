import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { MockDataService } from 'src/app/Services/mock-data.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  email: string = "";
  password: string = "";
  loginFailed: boolean = false;
  errorMessage: string | null = null;

  constructor(private userService: UserService, private mockDatService:MockDataService, private router: Router){}
  ngOnInit(): void {
    this.email = this.userService.getEmail() || '';
  }

  login() {
    const user = this.mockDatService.getUserByPassword(this.password);
    if (user && user.password === this.password) {
      // alert('Login successful!');
      this.errorMessage = null;
      this.loginFailed = false;
    } else {
      this.loginFailed = true;
      this.errorMessage = "Incorrect password. Please try again."
    }

    if(this.loginFailed!=true){
      this.router.navigate(['home'], { state: { source: 'login' } });
    }
  }


}
