import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonMasterPageComponent } from './dungeon-master-page.component';

describe('DungeonMasterPageComponent', () => {
  let component: DungeonMasterPageComponent;
  let fixture: ComponentFixture<DungeonMasterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DungeonMasterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DungeonMasterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
