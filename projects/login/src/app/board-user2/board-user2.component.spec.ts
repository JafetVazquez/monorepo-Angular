import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardUser2Component } from './board-user2.component';

describe('BoardUser2Component', () => {
  let component: BoardUser2Component;
  let fixture: ComponentFixture<BoardUser2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardUser2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardUser2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
