import { Component, Input } from '@angular/core';
import { ProfileSummaryData } from '../../../core/interfaces/core.interface';
import { LabelAtom } from '../../atoms/label/label';

/** Muestra los datos principales de una persona usando etiquetas atómicas. */
@Component({
  selector: 'dsb-profile-summary-molecule',
  imports: [LabelAtom],
  templateUrl: './profile-summary.html',
  styleUrl: './profile-summary.css',
})
export class ProfileSummaryMolecule {
  /** Información del perfil que se presenta. */
  @Input() profile: ProfileSummaryData = { name: '', role: '', initials: '' };
}
