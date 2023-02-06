<template>
  <v-sheet>
    <section class="pt-15">
      <ProductHeader />
      <ProductList />
    </section>
  </v-sheet>
</template>

<script>
import ProductHeader from "@/modules/product/components/ProductHeader.vue";

import ProductList from "@/modules/product/components/ProductList.vue";
export default {
  components: {
    ProductHeader,
    ProductList,
  },
};
</script>

<style lang="scss" scoped></style>
