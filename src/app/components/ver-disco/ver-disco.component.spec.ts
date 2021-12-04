import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDiscoComponent } from './ver-disco.component';

describe('VerDiscoComponent', () => {
  let component: VerDiscoComponent;
  let fixture: ComponentFixture<VerDiscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerDiscoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerDiscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
