export default function ProductList({$target, initialState}) {
    const $productList = document.createElement('div');
    $productList.className = 'Product_wrapper'
    $target.appendChild($productList)

    this.state = initialState;

    this.setState = nextState => {
        this.state = nextState;
        this.render();
    }

    this.render = () => {
        if(!this.state) {
            return;
        }

        $productList.innerHTML = `
        ${this.state.map(product => 
            `
            <div class="Product">
                <img class="Product_img" src="${product.imageUrl}">
                <div class="Product_info">
                    <div class="Product_name">${product.name}</div>
                    <div class="Product_price">${product.price}~</div>
                </div>
            </div>
            `
        ).join('')}`
    }
    
    this.render();
}