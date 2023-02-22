import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayresTableComponent } from './playres-table.component';

describe('PlayresTableComponent', () => {
  let component: PlayresTableComponent;
  let fixture: ComponentFixture<PlayresTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayresTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayresTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
