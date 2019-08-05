import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    
   <h2>{{ name }}</h2>
   <h2>{{ name | lowercase}}</h2>
   <h2>{{ name | uppercase}}</h2>
   <h2>{{ name | titlecase}}</h2>
   <h2>{{ name | slice: 1:4}}</h2>
   <h2>{{ person | json }}</h2>


   <h2>{{5.678 | number: '1.2-3'}}</h2>
   <h2>{{5.678 | number: '3.4-5'}}</h2>
   <h2>{{5.678 | number: '3.1-2'}}</h2>

   <h2>{{ 0.25 | percent }}</h2>
   
   <h2>{{ 0.25 | currency: 'INR'}}</h2>

   <h2>{{ date }}</h2>
   <h2>{{ date | date: 'short' }}</h2>
   <h2>{{ date | date: 'shortDate' }}</h2>
   <h2>{{ date | date: 'shortTime' }}</h2>

  `,
  styles: []
})
export class TestComponent implements OnInit {

 public name = "Elkay";
 public message = "Welcome to Angular Learning";
 public person = {
   "firstName": "John",
   "lastName": "Doe"
 }

 public date = new Date();

 constructor() { }

  ngOnInit() {
  }

  

}
