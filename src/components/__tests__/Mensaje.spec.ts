import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import MensajeVue from "../Mensaje.vue";

const fechaEntrega = new Date("2-7-2023");

describe("Mensaje", () => {
  it("renderiza correctamente", () => {
    const wrapper = mount(MensajeVue, {
      props: {
        mensaje: {
          id: 2,
          elemento: "mensaje",
          texto: "Mensaje A.",
          fecha: fechaEntrega.toLocaleDateString("es-ES"),
        },
      },
    });
    expect(wrapper.text()).toContain("Mensaje A.");
    expect(wrapper.text()).toContain("7/2/2023");
  });
});
