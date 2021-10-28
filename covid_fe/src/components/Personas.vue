<template>

  <div class="container-flex">
      <header>
        <h1>Gestión Personas</h1>
      </header>

            <form ref="form">
        <div class="form-row">
          <div class="col">
            <label for="text">Tipo de documento </label>
            <select class="form-control" id="docum_tipo_id" v-model="docum_tipo_id">
              <option disabled value="">Tipo de documento</option>

                <!-- <option>CC</option>
                <option>CE</option>
                <option>TI</option>
                <option>PA</option> -->
              <option v-for="documento in allTipodoc" :value="tipodoc.docum_tipo_id">{{
                tipodoc.docum_tipo
            }}</option>
            </select>
          </div>
          <div class="col">
            <input v-model="num_documento" type="number" class="form-control" placeholder="Número de documento" />
          </div>
          <div class="col">
            <input v-model="nombres" type="text" class="form-control" placeholder="Nombres" />
          </div>
          <div class="col">
            <input v-model="apellidos" type="text" class="form-control" placeholder="Apellidos" />
          </div>
          <div class="col">
              <label for="text">Fecha de nacimiento </label>
              <input v-model="fecha_nacim" type="date" class="form-control" />
          </div>

          <div class="col">
            <label for="text">Género </label>
            <select class="form-control" id="genero" v-model="genero">
                <option>M</option>
                <option>F</option>
            </select>
          </div>
          

          <div class="col">
            <button
              v-show="!flag_edit"
              @click="addPersona()"
              type="button"
              class="btn btn-brand btn-xing btn-block"
            >Agregar</button>
            <button
              v-show="flag_edit"
              @click="putPersona()"
              type="button"
              class="btn btn-brand btn-xing btn-block"
            >Guardar</button>
          </div>
        </div>
      </form>

<br />
      <div class="main">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Tipo doc.</th>
              <th scope="col">Núm. doc</th>
              <th scope="col">Nombres</th>
              <th scope="col">Apellidos</th>
              <th scope="col">F. Nacim</th>
              <th scope="col">Género</th>
              <th scope="col">Vacuna</th>
              <th scope="col" class="text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="persona in allPersona" v-bind:key="persona.psn_id">
              <th scope="row">{{people.name}}</th>
              <td>{{people.phone}}</td>
              <td>{{people.email}}</td>
              <td id="options-table">
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button
                    @click="removePeople(people.id)"
                    type="button"
                    class="btn btn-danger"
                  >Excluir</button>
                  <button @click="goToEdit(people)" type="button" class="btn btn-warning">Editar</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>



    </div>
</template>

<script>
import axios from "axios";
export default {
name: "Personas",
data: function() {
    return {
      allTipodoc:[],
    }

    },
    created: function() {
      this.getAllTipodoc();
    },
methods: {
    getAllTipodoc: async function() {
      axios
      
      .get(`http://pasaporte-covid-be.herokuapp.com/tipodoc`, { headers: {} })

      .then((result) => {
          this.allTipodoc = result.data;
        })
        .catch(() => {
          console.log("error en método getAllTipodoc");
          console.log(result)
        });
    }

    }

}
</script>



<style>

body {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
}
.main,
form {
  width: 600px;
}
.main {
  background-color: white;
  border-radius: 5px;
  box-shadow: 3px 4px #0000000d;
}
.container-flex {
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  flex-direction: column;
  align-items: center;
}
header {
  display: flex;
  justify-content: space-between;
  padding-bottom: 13px;
}
.title {
  margin-bottom: unset;
  font-size: 1.5rem;
  color: #026466;
}
#options-table {
  display: flex;
  justify-content: center;
  align-items: center;
}
.table th,
.table td {
  border-top: unset;
  text-align: center;
  vertical-align: unset;
}
#whitespace {
  height: 10%;
}
</style>