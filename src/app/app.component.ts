import { Component,  } from '@angular/core';
import { AnotherComponent, OtherComponent } from './index';
@Component({
  selector: 'app-root',
  template: 
  `
    <h1>Inline Template</h1>
  <app-other></app-other>
   <app-another> </app-another> 
   <app-another>
    <div>
      <h1>Hello</h1>
      <p> Nor </p>
     </div>
   </app-another> 
   <app-another> 
    <p> More</p>
   </app-another> 
   
  `,
  styles: [` 
    h1 {
      color:red;
    }
  `],

})
export class AppComponent {
  title : 'does this show up';
}
