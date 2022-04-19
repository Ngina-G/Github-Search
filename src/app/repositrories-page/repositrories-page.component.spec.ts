import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositroriesPageComponent } from './repositrories-page.component';

describe('RepositroriesPageComponent', () => {
  let component: RepositroriesPageComponent;
  let fixture: ComponentFixture<RepositroriesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepositroriesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositroriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
