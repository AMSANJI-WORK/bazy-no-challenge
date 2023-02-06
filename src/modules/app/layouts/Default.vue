<template>
  <v-app>
    <v-main>
      <v-sheet
        min-height="100vh"
        max-width="1280px"
        class="mx-auto bg-secondary"
      >
        <v-container>
          <router-view></router-view>
        </v-container>
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
