// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if request.auth != null;
//     }
//   }
// }

import { initializeApp } from "firebase/app";
import firebaseConfig from "../config.js";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  setDoc,
  query,
  getDocs,
  where,
  limit,
  deleteDoc
} from "firebase/firestore";

initializeApp(firebaseConfig);

const db = getFirestore();

const col = "pablo-coleccion";

// Agregar datos
const agregarDatos = async (data, callback) => {
  try {
    const docRef = await addDoc(collection(db, col), data);
    console.log("Document written with ID: ", docRef.id);
    callback();
  } catch (e) {
    console.error("Error adding document: ", e);
    alert("Error adding document");
  }
};

// Leer datos
const listarDatos = async () => {
  const q = query(collection(db, col));
  try {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data()); // Doc data extrae la info alamacenada en el documento
    });
  } catch (e) {
    console.log("Error", e);
  }
};

// Ordenar
// orderBy("name", "desc")
const obtenerDato = async (param) => {
  const q = query(collection(db, col), where("rut", "==", param), limit(2));
  // Where -> 1 arg: Campo - 2 arg: Operador - 3 arg: Valor
  try {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, doc.data());
    });
  } catch (e) {
    console.log("Error", e);
  }
};

// Actualizar datos
const actualizarDato = async (data) => {
  try {
    await setDoc(doc(db, col, data.id), data);
    alert("Datos actualizados");
    // Agregar callback aca
  } catch (e) {
    console.log("Error", e);
    alert("Error agregando documento");
  }
};

// Borrar datos
const borrarDato = async (id) => {
  try {
    await deleteDoc(doc(db, col, id));
    alert("Usuario borrado");
  } catch (e) {
    console.log("Error", e);
  }
};

export { agregarDatos, listarDatos, obtenerDato, actualizarDato, borrarDato };
