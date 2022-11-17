import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalJokeComponent } from './modal-joke.component';

describe('ModalJokeComponent', () => {
  let component: ModalJokeComponent;
  let fixture: ComponentFixture<ModalJokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalJokeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
