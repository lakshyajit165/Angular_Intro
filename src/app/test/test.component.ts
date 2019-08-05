import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      Welcome {{ name }}
    </h2>
    <h2 [style.color]="hasError ? 'red' : 'green'">Style binding</h2>
    <h2 [style.color]="highlightColor">Style binding 2</h2>
    <h2 [ngStyle]="titleStyles">Style binding 3</h2>
    `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = "Elkay";
 
  public hasError = false;
  public isSpecial = true;
  public highlightColor = "orange";

  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }
  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello "+ this.name;
  }

}
