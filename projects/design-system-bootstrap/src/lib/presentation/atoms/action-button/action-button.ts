import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActionButtonStyle } from '../../../core/interfaces/core.interface';

/** Botón reutilizable para acciones principales del showcase. */
@Component({
  selector: 'dsb-action-button-atom',
  templateUrl: './action-button.html',
  styleUrl: './action-button.css',
})
export class ActionButtonAtom {
  /** Texto visible del botón. */
  @Input() text = 'Continuar';

  /** Apariencia del botón. */
  @Input() style: ActionButtonStyle = 'solid';

  /** Notifica al componente padre que el botón fue presionado. */
  @Output() pressed = new EventEmitter<void>();
}
