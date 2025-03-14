import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-second-dynamic',
  imports: [],
  templateUrl: './second-dynamic.component.html',
  styleUrl: './second-dynamic.component.scss'
})
export class SecondDynamicComponent {
  @Input() name: string = 'secondValue';

  @Output()
  onSomething: EventEmitter<string> = new EventEmitter<string>();

  clickSomething(): void {
console.warn('click');
    this.onSomething.emit('test2');
  }
}
