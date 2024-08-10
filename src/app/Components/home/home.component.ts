import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  source: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Retrieve the state from the router
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.source = navigation.extras.state['source'];
    }
  }


}
