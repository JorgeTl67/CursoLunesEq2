import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FelixComponent } from './felix.component';

describe('FelixComponent', () => {
  let component: FelixComponent;
  let fixture: ComponentFixture<FelixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FelixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FelixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
