<template>
  <div class="home">
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
              <tr class="border-b hover:bg-orange-100 bg-gray-100">
                <td class="p-3 px-5"></td>
                <td class="p-3 px-5"></td>
                <td class="p-3 px-5"></td>
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
  </div>
</template>

<script>
// @ is an alias to /src
import ButtonTag from "@/components/core/ButtonTag"
export default {
  name: "Home",
  components: {
    ButtonTag
  }
}
</script>
