<template>
  <div class="flex">
    <div class="w-1/3 bg-gray-200 rounded mx-auto">
      <form action="" class="px-4 py-4 text-left" @submit.prevent="postMemory()">
        <div class="mb-2">
          <label class="uppercase tracking-wide text-black text-xs w-full font-bold mb-2" for="company"> Nombre </label>
          <input
            class="w-full bg-white text-black border border-gray-200 rounded py-3 px-4 mb-3 outline-none"
            type="text"
            v-model="name"
          />
        </div>
        <div class="mb-2">
          <label class="uppercase tracking-wide text-black text-xs w-full font-bold mb-2" for="company">
            Cantidad de Cartillas
          </label>
          <input
            class="w-full bg-white text-black border border-gray-200 rounded py-3 px-4 mb-3 outline-none"
            v-model="quantity"
            type="number"
          />
        </div>
        <div class="">
          <button-tag tag="button" class="text-md font-semibold mr-2" variant="success">Guardar</button-tag>
          <button-tag tag="router-link" class="text-md font-semibold" :to="{ name: 'home' }" variant="dark"
            >Regresar</button-tag
          >
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import MemoryRepository from "@/repositories/MemoryRepository"
import ButtonTag from "@/components/core/ButtonTag"
export default {
  name: "MemoryCreate",
  components: {
    ButtonTag
  },
  data() {
    return {
      name: "",
      quantity: 1
    }
  },
  methods: {
    async postMemory() {
      console.log(this.name, "mae")
      const response = await MemoryRepository.post({ name: this.name, quantity: this.quantity })
      console.log(response, "reponse")
      this.$router.push({ name: "home" })
    }
  }
}
</script>