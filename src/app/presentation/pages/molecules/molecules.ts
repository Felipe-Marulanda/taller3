import { Component } from '@angular/core';
import { ProfileSummaryMolecule, SearchBoxMolecule } from '@brejcha13320/design-system-bootstrap';

@Component({
  templateUrl: './molecules.html',
  imports: [SearchBoxMolecule, ProfileSummaryMolecule],
})
export class Molecules {
  searchMessage = 'Escribe algo para probar la búsqueda.';

  profile = { name: 'Felipe Marulanda', role: 'Estudiante', initials: 'FM' };

  search(query: string): void {
    this.searchMessage = query ? `Última búsqueda: ${query}` : 'La búsqueda está vacía.';
  }
}
