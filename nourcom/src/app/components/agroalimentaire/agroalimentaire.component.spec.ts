import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgroalimentaireComponent } from './agroalimentaire.component';

describe('AgroalimentaireComponent', () => {
  let component: AgroalimentaireComponent;
  let fixture: ComponentFixture<AgroalimentaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgroalimentaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgroalimentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
