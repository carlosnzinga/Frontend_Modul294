import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AufgabenDetailComponent } from './aufgaben.component';

describe('AufgabenComponent', () => {
  let component: AufgabenDetailComponent;
  let fixture: ComponentFixture<AufgabenDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AufgabenDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AufgabenDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
