/** Tonos disponibles para las etiquetas del sistema. */
export type LabelTone = 'blue' | 'green' | 'gray';

/** Estilos disponibles para el botón de acción. */
export type ActionButtonStyle = 'solid' | 'outline';

/** Datos que se muestran en un resumen de perfil. */
export interface ProfileSummaryData {
  name: string;
  role: string;
  initials: string;
}
