import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'mfe1';

  channel = new BroadcastChannel('my-channel');

  ngOnInit(): void {
    console.log('Remote loaded and listen to events');

    this.channel.onmessage = (message: any) => {
      console.log('Message reçu mfe1:', message.data);
    };
  }

  ngOnDestroy(): void {
    this.channel.close();
  }
}
