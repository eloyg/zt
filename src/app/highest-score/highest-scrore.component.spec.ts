import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighestScroreComponent } from './highest-scrore.component';

describe('HighestScroreComponent', () => {
  let component: HighestScroreComponent;
  let fixture: ComponentFixture<HighestScroreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighestScroreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighestScroreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
