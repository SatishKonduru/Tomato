import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simulation of ZOMATO with Tomato';
  parentMsg = "Hi This message is from Parent (APP/Root)"
  public inComingMessage;
}
