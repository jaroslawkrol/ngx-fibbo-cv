import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EefilComponent } from './eefil.component';

describe('EefilComponent', () => {
  let component: EefilComponent;
  let fixture: ComponentFixture<EefilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EefilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EefilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
