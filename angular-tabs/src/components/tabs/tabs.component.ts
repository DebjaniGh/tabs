import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface Tab {
  id: number;
  title: string;
  content: string;
  contentColor: string;
}

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css',
})
export class TabsComponent {
  activeTabId: number = 1;

  tabs: Tab[] = [
    {
      id: 1,
      title: 'Tab 1',
      content: 'Content for Tab 1',
      contentColor: '#f0f2e9',
    },
    {
      id: 2,
      title: 'Tab 2',
      content: 'Content for Tab 2',
      contentColor: '#f2fff5',
    },
    {
      id: 3,
      title: 'Tab 3',
      content: 'Content for Tab 3',
      contentColor: '#e8e9ed',
    },
  ];

  selectTab(id: number) {
    this.activeTabId = id;
  }
}
