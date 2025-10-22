import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Persona6Component } from './persona6.component';

describe('Persona6Component', () => {
  let component: Persona6Component;
  let fixture: ComponentFixture<Persona6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Persona6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Persona6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
