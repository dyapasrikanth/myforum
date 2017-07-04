import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private router: Router) { }
  navigate(location:string) {
    this.router.navigate([location]);
  }
  links = [
    {
      routerLink:'/questions',
      routerLabel:'QUESTIONS'
    },
    {
      routerLink:'/topics',
      routerLabel:'TOPICS'
    }
  ]
}
