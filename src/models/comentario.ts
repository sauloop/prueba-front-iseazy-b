export interface Comentario {
  id: number;
  elemento: string;
  numVersion?: number | undefined;
  texto?: string | undefined;
  nombre?: string | undefined;
  tipo?: string | undefined;
  fecha: string;
  url?: string | undefined;
}
