class Producto{
    constructor(title, description, price,  thumbnail, code, stock, id){
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
        this.id = 0;
    }
    static idGlobal = 0

    contar = () => {
        this.id = this.id + Producto.idGlobal
        Producto.idGlobal ++
    }
}

const getProducts = []

const addProducts = (titulo, description, price, thumbnail, code, stock) => {
    let producto = new Producto( titulo, description, price, thumbnail, code, stock)
    getProducts.push(producto)
    producto.contar()
}

console.log(getProducts)

addProducts("maseta", "una maseta linda", "$500", "No foto", `abc123`, "34")
addProducts("maseta", "una maseta linda", "$500", "No foto", `abc123`, "34")
addProducts("maseta", "una maseta linda", "$500", "No foto", `abc123`, "34")
addProducts("maseta", "una maseta linda", "$500", "No foto", `abc123`, "34")

console.log(getProducts)

const getProductBYId = (id) =>{
    
} 

console.log("Hola Mundo")