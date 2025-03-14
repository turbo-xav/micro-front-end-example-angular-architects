import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-first-dynamic',
  imports: [],
  templateUrl: './first-dynamic.component.html',
  styleUrl: './first-dynamic.component.scss'
})
export class FirstDynamicComponent {

  @Input() name: string = 'firstValue';

  @Output()
  onSomething: EventEmitter<string> = new EventEmitter<string>();


  clickSomething(): void {
    console.warn('click');
    this.onSomething.emit('test1');
  }

}
