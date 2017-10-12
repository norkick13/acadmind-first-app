import { Component } from '@angular/core';
import {  NgModel } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  template: `
  <input type="text" [(ngModel)] = "person.name">
  <input type="text" [(ngModel)] = "person.name">
  `,
  styles: []
})
export class TwoWayBindingComponent {
  person = {
    name: 'Nor',
    age: 27
  };  

}
