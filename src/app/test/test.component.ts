import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      Welcome {{ name }}
    </h2>
    <button (click)="onClick($event)">Greet</button>
    <button (click)="greeting='Welcome Elkay'">Greet 2</button>
    <p>{{greeting}}</p>
    `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = "Elkay";
  public greeting = "";

  constructor() { }

  ngOnInit() {
  }

  onClick(event){
    console.log(event);
    this.greeting = "Welcome";
  }

  greetUser(){
    return "Hello "+ this.name;
  }

}
