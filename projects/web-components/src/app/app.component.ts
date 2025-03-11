import { Component, CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';

@Component({
  selector: 'web-component-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppComponent {
  title = 'web-components';
}
