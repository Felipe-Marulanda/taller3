import { Component, Input } from '@angular/core';
import { LabelTone } from '../../../core/interfaces/core.interface';

/** Etiqueta corta para resaltar información dentro de una interfaz. */
@Component({
  selector: 'dsb-label-atom',
  templateUrl: './label.html',
  styleUrl: './label.css',
})
export class LabelAtom {
  /** Texto que se muestra en la etiqueta. */
  @Input() text = '';

  /** Tono visual de la etiqueta. */
  @Input() tone: LabelTone = 'gray';
}
