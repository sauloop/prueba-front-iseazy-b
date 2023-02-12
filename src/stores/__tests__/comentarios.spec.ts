import { createPinia, setActivePinia, type Store } from "pinia";
import { beforeEach, describe, expect, test } from "vitest";
import { useComentariosStore } from "../comentarios";

describe("Comentarios store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test("Incrementa id comentarios", () => {
    let i = 0;
    const comentarios = useComentariosStore();

    comentarios.idComentario = 0;

    while (i < 4) {
      comentarios.nuevoMensaje("Mensaje");
      i++;
    }

    expect(comentarios.idComentario).toBe(4);
  });
});
