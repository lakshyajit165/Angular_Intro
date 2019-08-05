import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      Welcome {{ name }}
    </h2>
    <input [id]="myId" type="text" value="Elkay">
    <input [disabled]="isDisabled" id="{{ myId }}" type="text" value="Elkay">
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = "Elkay";
  public myId = "testId";
  public isDisabled = true;
  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello "+ this.name;
  }

}
