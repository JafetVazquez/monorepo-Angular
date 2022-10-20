import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardAdmminComponent } from './board-admmin.component';

describe('BoardAdmminComponent', () => {
  let component: BoardAdmminComponent;
  let fixture: ComponentFixture<BoardAdmminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardAdmminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardAdmminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
