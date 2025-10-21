import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndreaComponent } from './andrea.component';

describe('AndreaComponent', () => {
  let component: AndreaComponent;
  let fixture: ComponentFixture<AndreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AndreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AndreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
