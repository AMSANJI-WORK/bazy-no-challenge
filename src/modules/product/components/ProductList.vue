<template>
  <v-item-group>
    <v-sheet class="d-flex flex-wrap align-stretch pt-15">
      <v-col cols="12" md="4" v-for="item in productList" :key="item.id">
        <v-hover v-slot="{ hover }">
          <v-item>
            <v-card
              class="rounded-0"
              color="secondary"
              width="100%"
              :to="`/products/${item.id}`"
            >
              <v-img :src="item.image" loading="lazy"></v-img>
              <v-card-title
                class="text-uppercase font-weight-black"
                style="max-width: 14rem"
                :class="hover | cardOnHover"
              >
                {{ item.title }}
              </v-card-title>
              <v-card-text class="py-0">
                <ProductCradTag :items="item.tag">
                  <v-icon small right color="grey lighten-1">mdi-pin</v-icon>
                </ProductCradTag>
                <ProductCradTag :items="item.tag2">
                  <v-icon small right color="grey lighten-1"
                    >mdi-label-percent</v-icon
                  >
                </ProductCradTag>
              </v-card-text>

              <v-card-actions
                class="font-weight-black text-caption mx-3"
                :class="hover | cardOnHover"
              >
                Balanchaev Balancha <v-spacer></v-spacer>March 20, 2019
              </v-card-actions>
            </v-card>
          </v-item>
        </v-hover>
      </v-col>
    </v-sheet>
  </v-item-group>
</template>

<script>
import ProductCradTag from "./ProductItemCardTag.vue";
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("product");
export default {
  components: {
    ProductCradTag,
  },
  computed: {
    ...mapGetters({ productList: "list" }),
  },
  filters: {
    cardOnHover(value) {
      return value ? "ml-3 red--text" : "";
    },
  },
  methods: {
    ...mapActions({
      fetchProduct: "fetch",
    }),
  },
  created() {
    this.fetchProduct();
  },
};
</script>

<style lang="scss" scoped></style>
