import { Component } from '@angular/core';
import { ActionButtonAtom, LabelAtom } from '@brejcha13320/design-system-bootstrap';

@Component({
  templateUrl: './atoms.html',
  imports: [LabelAtom, ActionButtonAtom],
})
export class Atoms {
  message = 'Todavía no se ha presionado el botón.';

  notify(): void {
    this.message = 'El átomo de acción respondió correctamente.';
  }
}
