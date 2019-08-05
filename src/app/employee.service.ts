import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  public getEmployees(){
    return [
      {id: "1", name: "Andrew", age: 30},
      {id: "2", name: "Brandon", age: 25},
      {id: "3", name: "Mathew", age: 26},
      {id: "4", name: "Lucy", age: 28}
    ]
  }
}
