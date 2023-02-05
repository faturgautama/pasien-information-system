import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDataPasienComponent } from './list-data-pasien.component';

describe('ListDataPasienComponent', () => {
  let component: ListDataPasienComponent;
  let fixture: ComponentFixture<ListDataPasienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDataPasienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDataPasienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
