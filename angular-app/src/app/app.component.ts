import { ServerMessage } from './server-message';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  serverMessage = 'None!';

  constructor(private http: HttpClient) {}

  getServerMessage() {
    this.http.get('http://localhost:3000/api/message').subscribe((data: ServerMessage) => {
      this.serverMessage = data.message;
    });
  }
}
