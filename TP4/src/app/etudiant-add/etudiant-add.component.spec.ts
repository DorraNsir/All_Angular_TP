import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantAddComponent } from './etudiant-add.component';

describe('EtudiantAddComponent', () => {
  let component: EtudiantAddComponent;
  let fixture: ComponentFixture<EtudiantAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtudiantAddComponent]
    });
    fixture = TestBed.createComponent(EtudiantAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
