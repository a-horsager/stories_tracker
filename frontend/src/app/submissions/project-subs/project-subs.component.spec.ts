import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSubsComponent } from './project-subs.component';

describe('ProjectSubsComponent', () => {
  let component: ProjectSubsComponent;
  let fixture: ComponentFixture<ProjectSubsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectSubsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
