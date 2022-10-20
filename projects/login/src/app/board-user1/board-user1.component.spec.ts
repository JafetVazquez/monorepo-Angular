import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardUser1Component } from './board-user1.component';

describe('BoardUser1Component', () => {
  let component: BoardUser1Component;
  let fixture: ComponentFixture<BoardUser1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardUser1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardUser1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
