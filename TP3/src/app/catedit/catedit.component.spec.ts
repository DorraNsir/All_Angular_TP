import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CateditComponent } from './catedit.component';

describe('CateditComponent', () => {
  let component: CateditComponent;
  let fixture: ComponentFixture<CateditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CateditComponent]
    });
    fixture = TestBed.createComponent(CateditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
