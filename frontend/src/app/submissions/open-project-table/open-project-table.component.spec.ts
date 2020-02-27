import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenProjectTableComponent } from './open-project-table.component';

describe('OpenProjectTableComponent', () => {
  let component: OpenProjectTableComponent;
  let fixture: ComponentFixture<OpenProjectTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenProjectTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenProjectTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
