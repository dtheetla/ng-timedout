# NgTimedout

Logout of the angular app after idle timeout.

## installation
npm install ng-timedout

## Usage
Import in your angular applications app module
```
import {NgTimedoutModule} from 'ng-timedout';
```
then add to imports
```
NgTimedoutModule.forRoot()
```

Import service in components
```
import {TimedoutService} from 'ng-timedout/timedout-service';
constructor( private timedout: TimedoutService)
this.timedout.start(this.authService, 15000);
```
