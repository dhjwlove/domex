import ProductList from "../components/ProductList.js";
import { request } from "../utils/api.js";

export default function ProductListPage({ $target }) { 
    const $page = document.createElement('div');
    $page.className = 'ProductListPage';

    $page.innerHTML = '<h1 class="ProductLP_title">상품 목록</h1>';

    this.render = () => { 
        $target.appendChild($page);
    }

    this.setState = (nextState) => {
        this.state = nextState;
        productList.setState(this.state);
    }

    const fetchProducts = async () => {
        const products = await request('/productList');
        this.setState(products);
    }

    const productList = new ProductList({
        $target: $page,
        initialState: this.state
    })

    fetchProducts()
}