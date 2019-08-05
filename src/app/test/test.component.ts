import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      Welcome {{ name }}
    </h2>
    <input #myinput type="text">
    <button (click)="logMessage(myinput.value)">Log</button>
    `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = "Elkay";
 

  constructor() { }

  ngOnInit() {
  }

  logMessage(value){
    console.log(value);
  }

}
