import { defineStore } from "pinia";
import type { Comentario } from "@/models/comentario";

interface ComentariosState {
  comentarios: Comentario[];
  idComentario: number;
}

const fechaEntrega = new Date("2-7-2023");
const fechaEntregaB = new Date("2-9-2023");

const comentariosData: Comentario[] = [
  {
    id: 1,
    elemento: "entrega",
    numVersion: 1,
    nombre: "Ejercicio1.pdf",
    tipo: "Documento / PDF (1.7 MB)",
    fecha: fechaEntrega.toLocaleDateString("es-ES"),
    url: "test",
  },
  {
    id: 2,
    elemento: "mensaje",
    texto: "Mensaje A.",
    fecha: fechaEntrega.toLocaleDateString("es-ES"),
  },
  {
    id: 3,
    elemento: "mensaje-respuesta",
    texto: "Mensaje B.",
    fecha: fechaEntrega.toLocaleDateString("es-ES"),
  },
  {
    id: 4,
    elemento: "entrega",
    numVersion: 2,
    nombre: "Ejercicio1.pdf",
    tipo: "Documento / PDF (2.7 MB)",
    fecha: fechaEntregaB.toLocaleDateString("es-ES"),
    url: "test",
  },
  {
    id: 5,
    elemento: "mensaje",
    texto: "Mensaje C.",
    fecha: fechaEntregaB.toLocaleDateString("es-ES"),
  },
  {
    id: 6,
    elemento: "mensaje-respuesta",
    texto: "Mensaje D.",
    fecha: fechaEntregaB.toLocaleDateString("es-ES"),
  },
];

export const useComentariosStore = defineStore("comentarios", {
  state: () =>
    ({
      comentarios: comentariosData,
      idComentario: 6,
    } as ComentariosState),
  actions: {
    nuevoMensaje(mensaje: string): void {
      this.comentarios.push({
        elemento: "mensaje",
        id: this.idComentario + 1,
        texto: mensaje,
        fecha: new Date().toLocaleDateString("es-ES"),
      });

      this.idComentario++;
    },
  },
});
