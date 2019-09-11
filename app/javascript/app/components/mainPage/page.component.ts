import { Component } from '@angular/core';
import template from './template.html';
import styles from './styles.sass';


@Component({
  selector: '.hello-angular',
  template: template,
  styles: [styles]
})
export class PageComponent {
  name = 'Try angular';
}
