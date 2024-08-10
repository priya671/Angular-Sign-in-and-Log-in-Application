import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Location } from '@angular/common';
import { UserService } from 'src/app/Services/user.service';
import { MockDataService } from 'src/app/Services/mock-data.service';


@Component({
  selector: 'app-signup2',
  templateUrl: './signup2.component.html',
  styleUrls: ['./signup2.component.css']
})
export class Signup2Component implements OnInit{

  organizationName: string = '';
  organizationId:string = "";
  designation: string = '';
  birthDate: Date | undefined;
  city: string = '';
  pincode: string = '';

  organizations: any[] | undefined;
  errorMessage:string = '';
  pincodeError: string | null = null;


  constructor(private router:Router, private userService:UserService, private location:Location, 
    private mockDataService:MockDataService){}

  ngOnInit(): void {
    this.organizations = this.mockDataService.getOrganizations();

    this.organizationName = localStorage.getItem('organizationName') || '';
    this.organizationId = localStorage.getItem('organizationId') || '';
    this.designation = localStorage.getItem('designation') || '';
    this.city = localStorage.getItem('city') || '';
    this.pincode = localStorage.getItem('pincode') || '';
  }

  goBack(){
    localStorage.setItem('organizationName', this.organizationName);
    localStorage.setItem('organizationId', this.organizationId);
    localStorage.setItem('designation', this.designation);
    localStorage.setItem('city', this.city);
    localStorage.setItem('pincode', this.pincode);
    this.location.back();
  }


  validatePincode() {
    const pincodePattern = /^[0-9]{6}$/;
    if (!pincodePattern.test(this.pincode)) {
      this.pincodeError = 'Pincode must be exactly 6 digits.';
    } else {
      this.pincodeError = null;
    }
  }

  validateOrganization() {
    localStorage.setItem('organizationName', this.organizationName);
    localStorage.setItem('organizationId', this.organizationId);
    localStorage.setItem('designation', this.designation);
    localStorage.setItem('city', this.city);
    localStorage.setItem('pincode', this.pincode);
    
    const valid = this.mockDataService.validateOrganization(this.organizationName);
    if (!valid) {
      this.errorMessage = 'Unknown organization-id or organization-name';
    } else {
      this.errorMessage = '';
      // alert('Signup successful!');
      this.router.navigate(['home'], { state: { source: 'signup' } });
    }
  }

}
