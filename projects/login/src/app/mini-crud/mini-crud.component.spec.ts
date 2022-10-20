import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCRUDComponent } from './mini-crud.component';

describe('MiniCRUDComponent', () => {
  let component: MiniCRUDComponent;
  let fixture: ComponentFixture<MiniCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniCRUDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
