<template>
  <!-- Render dentro de `<div id="modals"></div>` en index.html -->
  <Teleport to="#modals">
    <!-- Mostrar / ocultar el modal -->
    <div v-if="show">
      <!-- El fondo -->
      <div class="fixed inset-0 bg-gray-900 opacity-40"></div>

      <!-- Contenido -->
      <div class="fixed inset-0 flex h-auto">
        <div
          class="mx-4 my-10 w-full overflow-y-auto rounded-md bg-white scrollbar-none md:mx-20"
        >
          <div class="relative">
            <div class="absolute top-4 right-4 md:top-10 md:right-10">
              <slot name="cerrarA"></slot>
            </div>
          </div>

          <div class="mt-8 flex justify-center px-4 text-lg md:px-10">
            <h3>Comentarios</h3>
          </div>

          <hr class="mx-4 mt-6 h-px border-0 bg-gray-200 md:mx-10" />

          <template
            v-for="comentario in (comentariosStore.comentarios as Comentario[])"
            :key="comentario.id"
          >
            <Mensaje
              v-if="
                comentario.elemento === 'mensaje' ||
                comentario.elemento === 'mensaje-respuesta'
              "
              :mensaje="comentario"
            />

            <Entrega
              v-if="comentario.elemento === 'entrega'"
              :entrega="comentario"
            />
          </template>

          <form class="mt-8 px-4 md:flex md:justify-between md:px-10">
            <input
              :value="mensaje"
              @input="(event:any) => (mensaje = event.target.value)"
              class="m-0 block w-full rounded-full border bg-gray-200 px-10 py-2.5 font-bold md:mr-8 md:inline-block"
            />

            <div class="flex justify-end">
              <button
                type="button"
                class="btn btn-primary"
                @click="nuevoMensaje"
              >
                <font-awesome-icon icon="fa-solid fa-paper-plane" />
              </button>
            </div>
          </form>
          <div class="my-8 flex justify-center px-4 md:px-10">
            <slot name="cerrarB"></slot>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { useComentariosStore } from "@/stores/comentarios";
import { ref, Teleport, type Ref } from "vue";
import Mensaje from "./Mensaje.vue";
import Entrega from "./Entrega.vue";
import type { Comentario } from "@/models/comentario";

defineProps({
  show: Boolean,
});

const mensaje: Ref<string> = ref("");
const comentariosStore = useComentariosStore();

function nuevoMensaje(): void {
  comentariosStore.nuevoMensaje(mensaje.value);
  mensaje.value = "";
}
</script>
