const products = [
    { id: "1", name: "Alimento perro 1", description: "Alimento balanceado para perro", category:"perro", price: 2300 , stock: 6 },
    { id: "2", name: "Alimento perro 2", description: "Alimento balanceado para perro", category:"perro", price: 2400 , stock: 7 },
    { id: "3", name: "Alimento perro 3", description: "Alimento balanceado para perro", category:"perro", price: 2500 , stock: 7 },
    { id: "4", name: "Alimento gato 1", description: "Alimento balanceado para gato", category:"gato", price: 2600 , stock: 9 },
    { id: "5", name: "Alimento gato 2", description: "Alimento balanceado para gato", category:"gato", price:2700 , stock: 5 },
    { id: "6", name: "Alimento gato 3", description: "Alimento balanceado para gato", category:"gato", price: 2750,  stock: 5 },
    { id: "7", name: "Accesorio perro 1", description: "Accesorio perros", category:"perro", price: 950 , stock: 5 },
    { id: "8", name: "Accesorio perro 2", description: "Accesorio perros", category:"perro", price: 1000 , stock: 5 },
    { id: "9", name: "Accesorio perro 3", description: "Accesorio perros", category:"perro", price: 1200 , stock: 5 },
    { id: "10", name: "Accesorio gato 1", description: "Accesorio gatos", category:"gato", price: 1100 , stock: 5 },
    { id: "11", name: "Accesorio gato 2", description: "Accesorio gatos", category:"gato", price: 1150 , stock: 5 },
    { id: "12", name: "Accesorio gato 3", description: "Accesorio gatos", category:"gato", price: 1300 , stock: 5 },
];

export const getProducts = () => {
    return new Promise((resolve, reject) => {
    
    if (products.length > 0) {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    } else {
        reject("No hay productos");
    }
    });
};

export const getProduct = ( id ) => {
    return new Promise((resolve, reject) => {    
        const product = products.find( product => product.id === id); 
        setTimeout( () => { 
            if(!product) {
                reject("No se encontró el producto solicitado")
            } else {
                resolve(product);
            }
        }, 1000 )
    });
};

