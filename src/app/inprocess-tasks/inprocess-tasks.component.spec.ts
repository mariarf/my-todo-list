import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InprocessTasksComponent } from './inprocess-tasks.component';

describe('InprocessTasksComponent', () => {
  let component: InprocessTasksComponent;
  let fixture: ComponentFixture<InprocessTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InprocessTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InprocessTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
