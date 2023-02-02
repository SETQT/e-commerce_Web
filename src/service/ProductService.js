import axios from "axios";

const API = "https://dummyjson.com/"
class ProductService {


    getAllProduct() {
        return axios.get(API + "products")
    }
}

export default new ProductService()