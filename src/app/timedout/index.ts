import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TimedoutService} from './timedout-service'
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class TimedoutModule {
  static forRoot() {
    return {
      ngModule: TimedoutModule,
      providers: [ TimedoutService ]
    }
  }
 }
