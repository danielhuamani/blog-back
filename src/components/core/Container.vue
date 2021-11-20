<template>
  <div class="container-wrapper">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Container"
}
</script>
<style lang="css">
.container-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 10px;
}
</style>