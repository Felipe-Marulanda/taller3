import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LabelAtom } from './label';

describe('LabelAtom', () => {
  let fixture: ComponentFixture<LabelAtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [LabelAtom] }).compileComponents();
    fixture = TestBed.createComponent(LabelAtom);
  });

  it('muestra el texto y el tono recibido', () => {
    fixture.componentInstance.text = 'Listo';
    fixture.componentInstance.tone = 'green';
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Listo');
    expect(fixture.nativeElement.querySelector('span').className).toContain('label-green');
  });
});
