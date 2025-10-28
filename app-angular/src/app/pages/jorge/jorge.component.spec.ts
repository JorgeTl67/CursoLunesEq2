import { TestBed } from '@angular/core/testing';
import { JorgeComponent } from './jorge.component';

describe('JorgeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JorgeComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(JorgeComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should have titulo property', () => {
    const fixture = TestBed.createComponent(JorgeComponent);
    const component = fixture.componentInstance;
    expect(component.titulo).toEqual('Jorge Humberto Torres Luna');
  });

  it('should have imagenSoldado property', () => {
    const fixture = TestBed.createComponent(JorgeComponent);
    const component = fixture.componentInstance;
    expect(component.imagenSoldado).toEqual('assets/Soldado.jpg');
  });
});