import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksByCategoriesComponent } from './tasks-by-categories.component';

describe('TasksByCategoriesComponent', () => {
  let component: TasksByCategoriesComponent;
  let fixture: ComponentFixture<TasksByCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksByCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksByCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
