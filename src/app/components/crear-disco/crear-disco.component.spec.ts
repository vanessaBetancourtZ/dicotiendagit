import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDiscoComponent } from './crear-disco.component';

describe('CrearDiscoComponent', () => {
  let component: CrearDiscoComponent;
  let fixture: ComponentFixture<CrearDiscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearDiscoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearDiscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
