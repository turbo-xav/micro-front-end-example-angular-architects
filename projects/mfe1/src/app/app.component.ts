import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'mfe1';

  ngOnInit(): void {
    console.log('Remote loaded and listen to events');
    const channel = new BroadcastChannel('my-channel');
    channel.onmessage = (message) => {
      console.log('Message reçu:', message.data);
    };
  }
}
