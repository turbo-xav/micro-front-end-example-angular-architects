import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-remote',
  imports: [],
  templateUrl: './remote.component.html',
  styleUrl: './remote.component.scss'
})
export class RemoteComponent {
 @Input() remoteInput = 'remote is Ok';
}
