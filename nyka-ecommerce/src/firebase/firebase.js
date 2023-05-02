// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, getDoc, getDocs, doc, updateDoc,deleteDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAPrKBrrWWzm2MORczh-y_T_mGaqTzeIQY",
  authDomain: "nyka-ecommerce.firebaseapp.com",
  projectId: "nyka-ecommerce",
  storageBucket: "nyka-ecommerce.appspot.com",
  messagingSenderId: "258414457581",
  appId: "1:258414457581:web:facbdf277ea39f43fbd2e4",
  measurementId: "G-3T6RCF0DJJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore();//consultar base de datos

//con esta funcion obtenemos los productos de la base de datos
export const getProductos = async () => {
    const productos = await getDocs(collection(db, "productos"))
    const items = productos.docs.map(prod => {
        return { ...prod.data(), id: prod.id }
    })
    return console.log(items)
}
export const getProducto = async (id) => {
    const producto = await getDoc(doc(db, "productos", id))
    const item = { ...producto.data(), id: producto.id }
    return console.log( item)
}

