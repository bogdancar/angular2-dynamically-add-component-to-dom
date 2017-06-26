import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appInject]'
})
export class InjectDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
