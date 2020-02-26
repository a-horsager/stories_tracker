import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTableHeaderComponent } from './project-table-header.component';

describe('ProjectTableHeaderComponent', () => {
  let component: ProjectTableHeaderComponent;
  let fixture: ComponentFixture<ProjectTableHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectTableHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
