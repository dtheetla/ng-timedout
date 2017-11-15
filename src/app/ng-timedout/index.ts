import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TimedoutService} from './timedout-service'
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class NgTimedoutModule {
  static forRoot() {
    return {
      ngModule: NgTimedoutModule,
      providers: [ TimedoutService ]
    }
  }
 }
