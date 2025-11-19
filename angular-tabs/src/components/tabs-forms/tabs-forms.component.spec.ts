import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsFormsComponent } from './tabs-forms.component';

describe('TabsFormsComponent', () => {
  let component: TabsFormsComponent;
  let fixture: ComponentFixture<TabsFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsFormsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabsFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
