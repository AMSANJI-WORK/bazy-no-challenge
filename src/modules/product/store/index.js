import { productRepository } from "./repo";

export const ProductModule = {
  namespaced: true,
  state: () => ({
    loading: false,
    data: [],
  }),
  getters: {
    loading: (state) => state.loading,
    list: (state) => state.data,
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setData(state, payload) {
      state.data = [...payload];
    },
  },
  actions: {
    async fetch({ commit, getters }) {
      if (!getters.loading)
        try {
          commit("setLoading", true);
          const {data} = await productRepository.get();
          commit("setData", data.data);
        } catch (error) {
          console.log(error);
        } finally {
          commit("setLoading", false);
        }
    },
  },
};
