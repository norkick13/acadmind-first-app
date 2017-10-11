import { Component,  } from '@angular/core';
import { DatabindingComponent }  from './index';
@Component({
  selector: 'app-root',
  template: 
  `
    <h1>Root Component</h1>
    <app-databinding></app-databinding>
  `
})
export class AppComponent {
  title : 'does this show up';
}
