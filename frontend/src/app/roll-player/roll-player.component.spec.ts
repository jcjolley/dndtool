import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollPlayerComponent } from './roll-player.component';

describe('RollPlayerComponent', () => {
  let component: RollPlayerComponent;
  let fixture: ComponentFixture<RollPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
