import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActionButtonAtom } from './action-button';

describe('ActionButtonAtom', () => {
  let fixture: ComponentFixture<ActionButtonAtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ActionButtonAtom] }).compileComponents();
    fixture = TestBed.createComponent(ActionButtonAtom);
  });

  it('emite al presionar el botón', () => {
    const pressed = jest.spyOn(fixture.componentInstance.pressed, 'emit');
    fixture.detectChanges();

    fixture.nativeElement.querySelector('button').click();

    expect(pressed).toHaveBeenCalled();
  });
});
