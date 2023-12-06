import { doc } from "firebase/firestore";

const products = [
    { id: "1", name: "Dog Chow perro adulto", img:"/img/dogchowadultomg21.webp", description: "Alimento balanceado para perro", category:"perro", price: 2300 , stock: 6 },
    { id: "2", name: "Dog Chow perro cachorro", img:"/img/dogchowcachorromg15.webp", description: "Alimento balanceado para perro", category:"perro", price: 2400 , stock: 7 },
    { id: "3", name: "Pedigree perro adulto", img:"/img/pedigreeadultot21.webp", description: "Alimento balanceado para perro", category:"perro", price: 2500 , stock: 11 },
    { id: "4", name: "Royal Canin perro adulto", img:"/img/royaladultomg15.webp", description: "Alimento balanceado para perro", category:"perro", price: 950 , stock: 10 },
    { id: "5", name: "Bandeja sanitaria perro", img:"/img/Bsanitariaperro.webp", description: "Accesorio perros", category:"perro", price: 7900 , stock: 7 },
    { id: "6", name: "Cama para perro", img:"/img/Camaperro.webp", description: "Accesorio perros", category:"perro", price: 7300 , stock: 3 },
    { id: "7", name: "Excelent gato adulto", img:"/img/excelentadulto15.webp", description: "Alimento balanceado para gato", category:"gato", price: 2600 , stock: 9 },
    { id: "8", name: "Vital Cat gato adulto", img:"/img/vitalcangato75.webp", description: "Alimento balanceado para gato", category:"gato", price:2700 , stock: 5 },
    { id: "9", name: "Whiskas gato adulto", img:"/img/whiskas10.webp", description: "Alimento balanceado para gato", category:"gato", price: 2750,  stock: 5 },
    { id: "10", name: "Royal canin gato adulto", img:"/img/royalgato75.webp", description: "Alimento balanceado para gato", category:"gato", price: 1100 , stock: 8 },
    { id: "11", name: "Rascador gato", img:"/img/RascadorGato.webp", description: "Accesorio gatos", category:"gato", price: 5500 , stock: 5 },
    { id: "12", name: "Rascador esquinero gato", img:"/img/Rascadoresquinero.webp", description: "Accesorio gatos", category:"gato", price: 2200 , stock: 4 },
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


// export const getProduct = ( id ) => {
//     return new Promise((resolve, reject) => {    
//         const product = products.find( product => product.id === id); 
//         setTimeout( () => { 
//             if(!product) {
//                 reject("No se encontró el producto solicitado")
//             } else {
//                 resolve(product);
//             }
//         }, 1000 )
//     });
// };

