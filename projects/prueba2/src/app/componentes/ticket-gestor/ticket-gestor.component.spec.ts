import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketGestorComponent } from './ticket-gestor.component';

describe('TicketGestorComponent', () => {
  let component: TicketGestorComponent;
  let fixture: ComponentFixture<TicketGestorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketGestorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketGestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
