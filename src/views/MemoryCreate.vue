<template>
  <div class="flex">
    <div class="w-1/3 bg-gray-200 rounded mx-auto">
      <form action="" class="px-4 py-4 text-left">
        <div class="mb-2">
          <label class="uppercase tracking-wide text-black text-xs w-full font-bold mb-2" for="company"> Nombre </label>
          <input class="w-full bg-white text-black border border-gray-200 rounded py-3 px-4 mb-3" type="text" />
        </div>
        <div class="mb-2">
          <label class="uppercase tracking-wide text-black text-xs w-full font-bold mb-2" for="company">
            Cantidad de Cartillas
          </label>
          <input class="w-full bg-white text-black border border-gray-200 rounded py-3 px-4 mb-3" type="text" />
        </div>
        <div class="">
          <button-tag tag="router-link" class="text-md mr-2" :to="{ name: 'home' }" variant="dark">Regresar</button-tag>
          <button-tag tag="a" class="text-md" variant="success">Guardar</button-tag>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import ButtonTag from "@/components/core/ButtonTag"
export default {
  name: "MemoryCreate",
  components: {
    ButtonTag
  }
}
</script>