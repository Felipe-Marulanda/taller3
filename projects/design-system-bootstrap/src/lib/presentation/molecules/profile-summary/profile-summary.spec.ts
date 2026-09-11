import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileSummaryMolecule } from './profile-summary';

describe('ProfileSummaryMolecule', () => {
  let fixture: ComponentFixture<ProfileSummaryMolecule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ProfileSummaryMolecule] }).compileComponents();
    fixture = TestBed.createComponent(ProfileSummaryMolecule);
  });

  it('presenta los datos del perfil', () => {
    fixture.componentInstance.profile = {
      name: 'Santiago',
      role: 'Colaborador',
      initials: 'SR',
    };
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Santiago');
    expect(fixture.nativeElement.textContent).toContain('Colaborador');
    expect(fixture.nativeElement.querySelector('.avatar').textContent).toContain('SR');
  });
});
