import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchBoxMolecule } from './search-box';

describe('SearchBoxMolecule', () => {
  let fixture: ComponentFixture<SearchBoxMolecule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [SearchBoxMolecule] }).compileComponents();
    fixture = TestBed.createComponent(SearchBoxMolecule);
  });

  it('guarda el texto escrito y lo emite al buscar', () => {
    const searched = jest.spyOn(fixture.componentInstance.searched, 'emit');
    fixture.detectChanges();
    const input = fixture.nativeElement.querySelector('input');

    input.value = 'boton';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.nativeElement.querySelector('button').click();

    expect(searched).toHaveBeenCalledWith('boton');
  });
});
