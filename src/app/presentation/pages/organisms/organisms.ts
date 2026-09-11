import { Component } from '@angular/core';
import { DashboardHeaderOrganism } from '@brejcha13320/design-system-bootstrap';

@Component({
  selector: 'app-organisms',
  templateUrl: './organisms.html',
  imports: [DashboardHeaderOrganism],
})
export class Organisms {
  profile = { name: 'Santiago Ramírez', role: 'Colaborador', initials: 'SR' };
}
