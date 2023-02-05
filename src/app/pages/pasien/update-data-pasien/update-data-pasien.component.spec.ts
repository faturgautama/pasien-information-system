import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDataPasienComponent } from './update-data-pasien.component';

describe('UpdateDataPasienComponent', () => {
  let component: UpdateDataPasienComponent;
  let fixture: ComponentFixture<UpdateDataPasienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDataPasienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDataPasienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
