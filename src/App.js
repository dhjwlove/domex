// console.log(document)
import ProductListPage from "./page/ProductListPage.js";

export default function App({ $target }) {
    this.route = () => {
        const { pathname } = location;

        $target.innerHTML = '';
        if (pathname === '/') {
            new ProductListPage({ $target }).render();
        }
    }

    this.route();
}