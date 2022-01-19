<template>
  <div>
    <h1>CRUD</h1>

    <div class="container">
      <p>Crear usuario</p>
      <input type="text" placeholder="Nombre" v-model="crear.nombre" />
      <input type="text" placeholder="Apellido" v-model="crear.apellido" />
      <input type="text" placeholder="RUT" v-model="crear.rut" />
      <button @click="crearUsuario">Crear</button>
    </div>

    <div class="container">
      <p>Listar usuarios</p>
      <button @click="listarUsuarios">Listar usuarios en consola</button>
    </div>

    <div class="container">
      <p>Buscar usuario</p>
      <input type="text" placeholder="Rut" v-model="buscar" />
      <button @click="buscarUsuario">Buscar usuario</button>
    </div>

    <div class="container">
      <p>Actualizar usuario</p>
      <input type="text" placeholder="Nombre" v-model="actualizar.nombre" />
      <input type="text" placeholder="Apellido" v-model="actualizar.apellido" />
      <input type="text" placeholder="RUT" v-model="actualizar.rut" />
      <button @click="actualizarUsuario">Actualizar</button>
    </div>

    <div class="container">
      <p>Borrar usuario</p>
      <button @click="borrarUsuario">Borrar usuario</button>
    </div>
  </div>
</template>

<script>
import {
  agregarDatos,
  listarDatos,
  obtenerDato,
  actualizarDato,
  borrarDato,
} from "../firebase/firestore.js";
export default {
  data() {
    return {
      crear: {
        nombre: "",
        apellido: "",
        rut: "",
      },

      actualizar: {
        id: "mcW1B84dJMv4XdvRleaz",
        nombre: "",
        apellido: "",
        rut: "",
      },

      buscar: "",
      borrar: "mcW1B84dJMv4XdvRleaz",
    };
  },

  methods: {
    crearUsuarioCallback() {
      alert("Usuario creado con éxito");
      this.crear.nombre = "";
      this.crear.apellido = "";
      this.crear.rut = "";
    },

    crearUsuario() {
      agregarDatos(this.crear, this.crearUsuarioCallback);
    },

    listarUsuarios() {
      listarDatos();
    },

    buscarUsuario() {
      obtenerDato(this.buscar);
    },

    actualizarUsuario() {
      actualizarDato(this.actualizar);
    },

    borrarUsuario() {
      borrarDato(this.borrar);
    },
  },
};
</script>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 3rem auto;
}

input {
  margin-bottom: 1rem;
  padding: 0.25rem;
}
</style>