import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KorpaProizvodiComponent } from './korpa-proizvodi.component';

describe('KorpaProizvodiComponent', () => {
  let component: KorpaProizvodiComponent;
  let fixture: ComponentFixture<KorpaProizvodiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KorpaProizvodiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KorpaProizvodiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
