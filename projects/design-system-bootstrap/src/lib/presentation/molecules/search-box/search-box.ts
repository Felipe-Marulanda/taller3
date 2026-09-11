import { Component, EventEmitter, Output } from '@angular/core';
import { ActionButtonAtom } from '../../atoms/action-button/action-button';

/** Campo de búsqueda compuesto por un input y un botón atómico. */
@Component({
  selector: 'dsb-search-box-molecule',
  imports: [ActionButtonAtom],
  templateUrl: './search-box.html',
  styleUrl: './search-box.css',
})
export class SearchBoxMolecule {
  /** Texto escrito por el usuario. */
  query = '';

  /** Envía la búsqueda al showcase. */
  @Output() searched = new EventEmitter<string>();

  /** Actualiza el texto cuando el usuario escribe en el input. */
  onInput(event: Event): void {
    this.query = (event.target as HTMLInputElement).value;
  }
}
