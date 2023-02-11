<template>
  <div
    class="mx-4 my-8 w-auto rounded-md px-8 py-4 md:mx-10"
    :class="{
      'm-0 bg-sky-500 text-white md:ml-96': mensaje?.elemento === 'mensaje',
      'm-0 bg-gray-200  text-black md:mr-96':
        mensaje?.elemento === 'mensaje-respuesta',
    }"
  >
    <div class="flex w-full justify-start">
      <div>
        <p class="text-lg font-bold">{{ mensaje?.texto }}</p>
        <p class="mt-2 text-sm">{{ mensaje?.fecha }}</p>
      </div>
    </div>
  </div>
  <hr class="my-2 mx-4 h-px border-0 bg-gray-200 dark:bg-gray-700 md:mx-10" />
</template>

<script setup lang="ts">
import type { Comentario } from "@/models/comentario";
import type { PropType } from "vue";

defineProps({
  mensaje: {
    type: Object as PropType<Comentario>,
  },
});
</script>
