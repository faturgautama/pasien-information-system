import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDataPasienComponent } from './detail-data-pasien.component';

describe('DetailDataPasienComponent', () => {
  let component: DetailDataPasienComponent;
  let fixture: ComponentFixture<DetailDataPasienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailDataPasienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDataPasienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
