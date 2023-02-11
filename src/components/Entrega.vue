<template>
  <div class="mx-4 my-0 flex justify-start bg-white py-8 text-white md:mx-10">
    <div class="flex w-full items-center justify-between">
      <div class="text-lg font-bold">
        <p class="text-gray-700">VERSIÓN {{ entrega?.numVersion }}</p>
        <p class="mt-1 text-blue-500">{{ entrega?.nombre }}</p>
        <p class="mt-1 mr-6 inline-block text-gray-700">
          {{ entrega?.tipo }}
        </p>
        <p class="mt-1 inline-block text-gray-700">
          {{ entrega?.fecha }}
        </p>
      </div>

      <font-awesome-icon
        icon="fa-solid fa-cloud-arrow-down"
        class="cursor-pointer text-4xl text-sky-500"
      />
    </div>
  </div>
  <hr class="mx-4 my-2 h-px border-0 bg-gray-200 md:mx-10" />
</template>

<script setup lang="ts">
import type { Comentario } from "@/models/comentario";
import type { PropType } from "vue";

defineProps({
  entrega: {
    type: Object as PropType<Comentario>,
  },
});
</script>
