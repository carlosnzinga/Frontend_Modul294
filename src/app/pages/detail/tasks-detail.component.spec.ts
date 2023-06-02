import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TasksListComponent } from '../list/tasks-list.component';


describe('TasksDetailComponent', () => {
  let component: TasksListComponent;
  let fixture: ComponentFixture<TasksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
