import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndreaVazquezComponent } from './andrea-vazquez.component';

describe('AndreaVazquezComponent', () => {
  let component: AndreaVazquezComponent;
  let fixture: ComponentFixture<AndreaVazquezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AndreaVazquezComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AndreaVazquezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
