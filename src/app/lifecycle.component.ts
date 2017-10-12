import { 
  Component, 
  OnInit, 
  OnChanges,
  DoCheck, 
  AfterContentChecked,
  AfterViewChecked, 
  AfterContentInit,
  AfterViewInit, 
  OnDestroy ,
  Input
  } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
  <ng-content></ng-content>
  <hr>
  <p #boundParagraph>{{bindable}}</p>
  <p>{{boundParagraph.textContent}}</p>
  `,
  styles: []
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit,AfterContentChecked,AfterViewInit, AfterViewChecked, OnDestroy 
{
  @Input() bindable= 1000;
  constructor() { }

   ngOnChanges() {
     //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
     //Add '${implements OnChanges}' to the class.
     this.log('ngOnChanges');
   }

   ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.log('ngOnInit');
  }

 ngDoCheck() {
   //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
   //Add 'implements DoCheck' to the class.
   this.log('ngDoCheck');
 }
 ngAfterContentInit() {
   //Called after ngOnInit when the component's or directive's content has been initialized.
   //Add 'implements AfterContentInit' to the class.
   this.log('ngOnChanges');
 }
 ngAfterContentChecked() {
   //Called after every check of the component's or directive's content.
   //Add 'implements AfterContentChecked' to the class.
   this.log('ngAfterContentChecked');
 }
 ngAfterViewInit() {
   //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
   //Add 'implements AfterViewInit' to the class.
   this.log('ngAfterViewInit');
 }
 ngAfterViewChecked() {
   //Called after every check of the component's view. Applies to components only.
   //Add 'implements AfterViewChecked' to the class.
   this.log('ngOnChanges');
 }
 ngOnDestroy() {
   //Called once, before the instance is destroyed.
   //Add 'implements OnDestroy' to the class.
   this.log('ngOnDestroy');
 }
  private  log (hook : string) {
  console.log(hook);
  }
}
