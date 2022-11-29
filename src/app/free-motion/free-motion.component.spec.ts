import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeMotionComponent } from './free-motion.component';

describe('FreeMotionComponent', () => {
  let component: FreeMotionComponent;
  let fixture: ComponentFixture<FreeMotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeMotionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeMotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
