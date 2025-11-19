import { Component } from '@angular/core';
import { TabsComponent } from '../components/tabs/tabs.component';
import { TabsFormsComponent } from '../components/tabs-forms/tabs-forms.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TabsComponent, TabsFormsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-tabs';
}
