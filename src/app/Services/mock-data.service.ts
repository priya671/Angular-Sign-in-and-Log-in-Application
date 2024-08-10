import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  private users = [
    { email: 'test@example.com', phone: '1234567890', password: 'password123' }
  ];

  private organizations = [
    { id: 1, name: 'Organization 1' },
    { id: 2, name: 'Organization 2' }
  ];

  getUserByEmail(email: string) {
    return this.users.find(user => user.email === email);
  }

  getUserByPhone(phone: string) {
    return this.users.find(user => user.phone === phone);
  }

  getUserByPassword(password:string){
    return this.users.find(user => user.password === password);
  }

  getOrganizations() {
    return this.organizations;
  }

  validateOrganization(orgName: string) {
    return this.organizations.find(org => org.name === orgName);
  }

  constructor() { }
}
