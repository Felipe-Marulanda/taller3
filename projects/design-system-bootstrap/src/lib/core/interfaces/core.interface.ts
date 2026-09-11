/** Tonos disponibles para las etiquetas del sistema. */
export type LabelTone = 'blue' | 'green' | 'gray';

/** Estilos disponibles para el botón de acción. */
export type ActionButtonStyle = 'solid' | 'outline';

/** Datos que se muestran en un resumen de perfil. */
export interface ProfileSummaryData {
  /** Nombre completo de la persona. */
  name: string;

  /** Rol o función que se muestra debajo del nombre. */
  role: string;

  /** Iniciales usadas en el avatar. */
  initials: string;
}
