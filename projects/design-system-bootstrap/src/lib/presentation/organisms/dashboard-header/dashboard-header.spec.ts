import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardHeaderOrganism } from './dashboard-header';

describe('DashboardHeaderOrganism', () => {
  let fixture: ComponentFixture<DashboardHeaderOrganism>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [DashboardHeaderOrganism] }).compileComponents();
    fixture = TestBed.createComponent(DashboardHeaderOrganism);
  });

  it('muestra el encabezado y permite buscar', () => {
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation();
    fixture.componentInstance.profile = { name: 'Felipe', role: 'Estudiante', initials: 'FM' };
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Componentes del sistema');
    fixture.componentInstance.showSearch('label');

    expect(alertSpy).toHaveBeenCalledWith('Buscando: label');
    alertSpy.mockRestore();
  });
});
