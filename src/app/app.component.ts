import { Component } from '@angular/core';
import { HostPageComponent } from './host-page/host-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  storedData: Object;
  // hostPage: HostPageComponent;

  
}
