import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Persona5Component } from './persona5.component';

describe('Persona5Component', () => {
  let component: Persona5Component;
  let fixture: ComponentFixture<Persona5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Persona5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Persona5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
