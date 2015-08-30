/// <reference path="../../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';

// Annotation section
@Component({
  selector: 'app'
})
@View({
  template: '<h1>{{ name }}</h1>'
})
// Component controller
class App {
  name: string;
  constructor() {
    this.name = 'Angular Shop';
  }
}

bootstrap(App);
