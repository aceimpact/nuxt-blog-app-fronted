<template>
  <header class="header">
    <v-container> Nuxt Blog App </v-container>
  </header>

  <main>
    <slot />
  </main>
</template>

<style lang="scss" scoped>
.header {
  background-color: #00bfff;
  color: #fff;
}
</style>
