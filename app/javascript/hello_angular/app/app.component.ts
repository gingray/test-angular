import { Component } from '@angular/core';
import template from './app.component.html';
import styles from './styles.sass';


@Component({
  selector: '.hello-angular',
  template: template,
  styles: [styles]
})
export class AppComponent {
  name = 'Try angular';
}
