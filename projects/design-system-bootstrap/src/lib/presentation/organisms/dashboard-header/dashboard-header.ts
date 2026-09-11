import { Component, Input } from '@angular/core';
import { ProfileSummaryData } from '../../../core/interfaces/core.interface';
import { ProfileSummaryMolecule } from '../../molecules/profile-summary/profile-summary';
import { SearchBoxMolecule } from '../../molecules/search-box/search-box';

/** Encabezado completo que reúne búsqueda y perfil en una sola sección. */
@Component({
  selector: 'dsb-dashboard-header-organism',
  imports: [SearchBoxMolecule, ProfileSummaryMolecule],
  templateUrl: './dashboard-header.html',
  styleUrl: './dashboard-header.css',
})
export class DashboardHeaderOrganism {
  /** Perfil que se visualiza en el encabezado. */
  @Input() profile: ProfileSummaryData = { name: '', role: '', initials: '' };

  /** Presenta el texto buscado para que el showcase lo pueda revisar. */
  showSearch(query: string): void {
    if (query.trim()) {
      alert(`Buscando: ${query}`);
    }
  }
}
