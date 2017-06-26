import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { InjectDirective } from '../inject.directive';
import { InjectedComponent } from '../injected/injected.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @ViewChild(InjectDirective) injectComp: InjectDirective;

  constructor(private _componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
  }

  public addComp() {
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(InjectedComponent);
    const viewContainerRef = this.injectComp.viewContainerRef;
    const componentRef = viewContainerRef.createComponent(componentFactory);
  }

  public removeComp() {
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(InjectedComponent);
    const viewContainerRef = this.injectComp.viewContainerRef;
    const componentRef = viewContainerRef.remove();
  }

}
