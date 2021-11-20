<template>
  <container>
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold">Bienvenido</h2>
      <h3 class="text-lg">Este es un juego de memoria basado en Ricky and Morty</h3>
      <div class="text-gray-900 mt-8">
        <div class="p-3 flex justify-end">
          <button-tag tag="router-link" :to="{ name: 'memory-create' }" variant="success">Crear Juego</button-tag>
        </div>
        <div class="px-3 py-4 flex justify-center">
          <table class="w-full text-md bg-gray-100 rounded mb-4">
            <tbody>
              <tr class="border-b">
                <th class="text-left p-3 px-5">Fecha</th>
                <th class="text-left p-3 px-5">Nombre</th>
                <th class="text-left p-3 px-5">N° Cartillas</th>
                <th class="text-left p-3 px-5">Acciones</th>
              </tr>
              <tr class="border-b hover:bg-orange-100 bg-gray-100" v-for="memory in memories" :key="memory.id">
                <td class="p-3 px-5 text-left">{{ memory.created }}</td>
                <td class="p-3 px-5 text-left">{{ memory.name }}</td>
                <td class="p-3 px-5 text-left">{{ memory.quantity }}</td>
                <td class="p-3 px-5 flex justify-start">
                  <button-tag tag="a" class="text-sm mr-2" variant="main">Editar</button-tag>
                  <button-tag tag="a" class="text-sm" variant="danger">Eliminar</button-tag>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </container>
</template>

<script>
// @ is an alias to /src
import MemoryRepository from "@/repositories/MemoryRepository"
import ButtonTag from "@/components/core/ButtonTag"
import Container from "@/components/core/Container"
export default {
  name: "Home",
  components: {
    ButtonTag,
    Container
  },
  data() {
    return {
      memories: []
    }
  },
  created() {
    this.getMemories()
  },
  methods: {
    async getMemories() {
      const { data } = await MemoryRepository.get()
      this.memories = data
      console.log(data)
    }
  }
}
</script>
