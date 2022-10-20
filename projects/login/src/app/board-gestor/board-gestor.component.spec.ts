import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardGestorComponent } from './board-gestor.component';

describe('BoardGestorComponent', () => {
  let component: BoardGestorComponent;
  let fixture: ComponentFixture<BoardGestorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardGestorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardGestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
