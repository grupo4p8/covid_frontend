<template>
  <div id="crear_producto">
    <h2>Crear Inmueble</h2>
    <label for="text"> Arrendatario</label>
    <select class="form-control" id="id_arrendatario" v-model="id_arrendatario">
      <option v-for="usuario in allUsuarios" :value="usuario.id">{{
        usuario.name
      }}</option>
    </select>
    <label for="precio">Precio</label>
    <input
      type="number"
      id="precio"
      name="precio"
      v-model="precio"
      placeholder="$$$$$"
    />
    <label for="precio_unitario"> Numero de habitaciones</label>
    <input
      type="number"
      id="habitaciones"
      name="habitaciones"
      v-model="habitaciones"
      placeholder="Numero de habitaciones"
    />
    <label for="habitaciones">Tipo de inmueble</label>
    <select class="form-control" id="tipo" v-model="tipo">
      <option v-for="tipo in allTipos" :value="tipo.id">{{
        tipo.nombre
      }}</option>
    </select>
    <label for="unit_messu">Estado inmueble</label>
    <select class="form-control" id="disponible" v-model="disponible">
      <option value="true">Disponible</option>
      <option value="false">No Disponible</option>
    </select>
    <button v-on:click="createInmueble">createProducto</button>
    <button v-on:click="resetProduct">borrar campos</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CrearInmueble",
  data: function() {
    return {
      id: "",
      id_arrendatario: "",
      precio: 10000,
      habitaciones: "",
      tipo: "",
      disponible: false,
      allUsuarios: [],
      allTipos: [],
    };
  },
  created: function() {
    debugger;
    this.id_arrendatario = localStorage.getItem("userId");
    this.getAllUsuarios();
    this.getAllTipos();
  },
  methods: {
    getAllUsuarios: async function() {
      axios
        .get(`http://127.0.0.1:8000/users/`, { headers: {} })

        .then((result) => {
          debugger;
          this.allUsuarios = result.data;
        })
        .catch(() => {
          this.$emit("logOut");
        });
    },
    verifyToken: function() {
      return axios
        .post(
          "http://127.0.0.1:8000/refresh/",
          { refresh: localStorage.getItem("token_refresh") },
          { headers: {} }
        )
        .then((result) => {
          localStorage.setItem("token_access", result.data.access);
        })
        .catch(() => {
          this.$emit("logOut");
        });
    },
    getAllTipos: async function() {
      axios
        .get(`http://127.0.0.1:8000/tipoInmuebles/`, { headers: {} })

        .then((result) => {
          this.allTipos = result.data;
        })
        .catch(() => {
          this.$emit("logOut");
        });
    },
    resetProduct: function() {
      this.username = this.$route.params.username;
      let self = this;
      (self.id_arrendatario = ""), (self.precio = ""), (self.habitaciones = "");
      (self.tipo = ""), (self.disponible = false);
    },
    createInmueble: function() {
      debugger;
      let inmueble = {
        id_arrendatario: parseInt(this.id_arrendatario),
        precio: this.precio,
        habitaciones: this.habitaciones,
        tipo: this.tipo,
        disponible: this.disponible,
      };
      this.verifyToken();
      axios
        .post("http://127.0.0.1:8000/inmueble/", inmueble, {
          headers: { Authorization: `Bearer ${ localStorage.getItem("token_access")}` },
        })
        .then((result) => {
          debugger;
          if (result.status == 201) {
            alert("se ha creado correctamente el inmueble");
            this.resetProduct;
          } else {
            console.log(result);
            alert("hubo un error al crear el iunmueble");
          }
        })
        .catch((error) => {
          if (error.response.status == "401")
            alert("ERROR 401: Credenciales Incorrectas.");
        });
    },
    verifyToken: function() {
      return axios
        .post(
          "http://127.0.0.1:8000/refresh/",
          { refresh: localStorage.getItem("token_refresh") },
          { headers: {} }
        )
        .then((result) => {
          localStorage.setItem("token_access", result.data.access);
        })
        .catch(() => {
          this.$emit("logOut");
        });
    },
  },
};
</script>

<style>
#Prodcuts {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#editar_producto {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#Prodcuts h2 {
  font-size: 16 px;
  color: #0a1016;
  margin-top: 2px;
  margin-bottom: 2px;
}
#Prodcuts h1 {
  font-size: 16 px;
  color: #2e455e;
  margin-top: 2px;
  margin-bottom: 2px;
}
#Prodcuts span {
  color: crimson;
  font-weight: bold;
}
#Prodcuts label {
  font-size: 25 px;
  color: #0a1016;
}
#Prodcuts input {
  color: #0a1016;
  font-weight: bold;
}
</style>
