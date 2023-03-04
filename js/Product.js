productsArray = []



class ProductManager{

    constructor(){

        this.products = productsArray

    }

    addProduct(newProduct){

        const product = this.products.find(prod => prod.code === newProduct.code)

        if(product){

            return 'Existe el producto con este codigo'

        }

        this.products.push( {id: this.products.length + 1, ...newProduct } )

    }

    getProducts(){

        return this.products

    }

    

    getProductById(id){

        const product = this.products.find(prod => prod.id === id)

        if (!product) {

            return 'Not found'

        }

 

        return product

    }

}

const productos = new ProductManager()

productos.addProduct({
    title: 'jean',
    description: 'Jean clarito talla 34',
    thumbnail: 'sin foto',
    price: 5000,
    code: 'aaa00002',
    stock: 50
})

productos.addProduct(
    {
        title: 'Remera',
        description: 'Una remera blanca, talle xl',
        thumbnail: 'sin foto',
        price: 2500,
        code: 'aaa00001',
        stock: 150
    }
)

console.log(productos.getProducts())

console.log(productos.getProductById(2))