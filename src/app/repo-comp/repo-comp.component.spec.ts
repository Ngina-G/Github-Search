import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoCompComponent } from './repo-comp.component';

describe('RepoCompComponent', () => {
  let component: RepoCompComponent;
  let fixture: ComponentFixture<RepoCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
