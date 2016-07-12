import {Component} from '@angular/core';
import {MyChildComponent} from './my-child.component';

// any child components must be declared in the directives property.
// templateUrl should be specified from the root of the project.
@Component({
  selector: 'my-root',
  templateUrl: '/dist/components/my-root.html',
  directives: [MyChildComponent]
})
export class MyRootComponent {

}
