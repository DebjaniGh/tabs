import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

interface FormControlConfig {
  name: string;
  label: string;
  type: string;
  validators: any[];
}

interface Tabs {
  id: number;
  title: string;
  formGroup: FormGroup;
  formControls: FormControlConfig[];
}

@Component({
  selector: 'app-tabs-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tabs-forms.component.html',
  styleUrl: './tabs-forms.component.css',
})
export class TabsFormsComponent {
  activeTabId = 1;
  formData = {};
  tabs: Tabs[] = [
    {
      id: 1,
      title: 'Tab 1',
      formGroup: new FormGroup({}),
      formControls: [
        {
          name: 'firstName',
          label: 'First Name',
          type: 'text',
          validators: [Validators.required],
        },
        {
          name: 'lastName',
          label: 'Last Name',
          type: 'text',
          validators: [Validators.required],
        },
      ],
    },
    {
      id: 2,
      title: 'Tab 2',
      formGroup: new FormGroup({}),
      formControls: [
        {
          name: 'email',
          label: 'Email',
          type: 'email',
          validators: [Validators.required, Validators.email],
        },
      ],
    },
    {
      id: 3,
      title: 'Tab 3',
      formGroup: new FormGroup({}),
      formControls: [
        {
          name: 'address',
          label: 'Address',
          type: 'text',
          validators: [Validators.required],
        },
      ],
    },
  ];

  ngOnInit() {
    this.tabs.forEach((tab) => {
      tab.formControls.forEach((control) => {
        tab.formGroup.addControl(
          control.name,
          new FormControl('', control.validators)
        );
      });
    });
  }

  selectTab(id: number) {
    this.activeTabId = id;
  }

  onSubmit() {
    // get all form groups and merge them into one
    this.formData = {};
    this.tabs.forEach((tab) => {
      Object.assign(this.formData, tab.formGroup.value);
    });

    console.log(this.formData);
  }
}
