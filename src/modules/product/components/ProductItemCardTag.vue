<template>
  <v-chip-group class="pa-0">
    <slot />

    <v-chip
      :to="`/product/${tag}`"
      v-for="(tag, index) in items"
      active
      small
      :key="index"
      class="transparent font-weight-medium grey--text lighten-2 text-uppercase ma-0 px-1"
    >
      {{ tag }}
    </v-chip>
  </v-chip-group>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style lang="scss" scoped></style>
