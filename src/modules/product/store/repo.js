import { defaultClient } from "@/modules/app/constant/config";

class ProductRepository {
  resource = "/api/products.json";
  get = (params = null) =>
    !params
      ? defaultClient.get(this.resource)
      : defaultClient.get(`${this.resource}/${params}`);
}
export const productRepository = new ProductRepository();
