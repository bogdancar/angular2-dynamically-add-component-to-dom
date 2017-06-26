import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { InjectedComponent } from './injected/injected.component';
import { InjectDirective } from './inject.directive';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    InjectedComponent,
    InjectDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ InjectedComponent ]
})
export class AppModule { }
