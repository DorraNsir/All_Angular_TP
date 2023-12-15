import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantEditComponent } from './etudiant-edit.component';

describe('EtudiantEditComponent', () => {
  let component: EtudiantEditComponent;
  let fixture: ComponentFixture<EtudiantEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtudiantEditComponent]
    });
    fixture = TestBed.createComponent(EtudiantEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
