import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      Welcome {{ name }}
    </h2>
    <h2 class="text-success">Angular Learning</h2>
    <h2 [class]="successClass">Angular Learning</h2>
    <h2 [class.text-danger]="hasError">Angular Learning</h2>
    <h2 [ngClass]="messageClasses">Angular Learning</h2>
    `,
  styles: [`
  .text-success {
    color: green;
  }
  .text-danger {
    color: red;
  }
  .text-special {
    font-style: italic;
  }
  `]
})
export class TestComponent implements OnInit {

  public name = "Elkay";
  public myId = "testId";
  public successClass = "text-success";
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello "+ this.name;
  }

}
