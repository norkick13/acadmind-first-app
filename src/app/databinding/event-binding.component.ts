import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <button (click) = "onClicked()">Click Me</button>
  `,
  styles: []
})
export class EventBindingComponent  {
  onClicked () {
    alert ('t workede');
  } 
}
