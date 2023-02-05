import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDataPasienComponent } from './input-data-pasien.component';

describe('InputDataPasienComponent', () => {
  let component: InputDataPasienComponent;
  let fixture: ComponentFixture<InputDataPasienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputDataPasienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDataPasienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
