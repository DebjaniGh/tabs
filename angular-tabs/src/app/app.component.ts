import { Component } from '@angular/core';
import { TabsComponent } from '../components/tabs/tabs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TabsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-tabs';
}
