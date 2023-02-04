import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouqComponent } from './souq.component';

describe('SouqComponent', () => {
  let component: SouqComponent;
  let fixture: ComponentFixture<SouqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SouqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SouqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
