import { Component} from '@angular/core';

@Component({
  selector: 'app-another',
  template: `
    <article>
      <ng-content></ng-content>
    </article>
  `,
  styles: [`
  article {
    border: solid 1px black;
  }`]
})
export class AnotherComponent  {


}
