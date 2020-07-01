import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanitaireComponent } from './sanitaire.component';

describe('SanitaireComponent', () => {
  let component: SanitaireComponent;
  let fixture: ComponentFixture<SanitaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanitaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanitaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
