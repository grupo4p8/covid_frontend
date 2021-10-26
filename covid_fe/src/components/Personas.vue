<template>

  <div class="container-flex">
      <header>
        <h1>Gestión Personas</h1>
      </header>

            <form ref="form">
        <div class="form-row">
          <div class="col">
            <label for="text">Tipo de documento </label>
            <select class="form-control" id="docum_tipo" v-model="docum_tipo">
                <option>CC</option>
                <option>CE</option>
                <option>TI</option>
                <option>PA</option>
            <!-- <option v-for="documento in allTipodoc" :value="tipodoc.docum_tipo_id">{{
                tipodoc.docum_tipo
            }}</option> -->
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





            <!-- <div class="psn_table_div">

                <table id="psn_table">
                    <tr>
                        <td>Tipo doc.</td>
                        <td>Núm. doc.</td>
                        <td>Nombres</td>
                        <td>Apellidos</td>
                        <td>F. Nacim.</td>
                        <td>Género</td>
                        <td>Vacuna</td>
                    </tr>
                </table>
            </div>
            <div class="psn_btns_div" style="visibility: hidden">
                <button id="psn_btn_guardar">Guardar</button>
                <button id="psn_btn_eliminar">Eliminar</button>
                <button id="psn_btn_buscar">Buscar</button>
                <button id="psn_btn_limpiar">Limpiar</button>
            </div>
            <div class="psn_form_div">
                <form action="validador_example" method="post">
                    <p>Tipo de documento: <select name="psn_form_id_type" id="psn_form_id_type">
                        <option>CC</option>
                        <option>CE</option>
                        <option>TI</option>
                        <option>PA</option>
                    </select>
                    </p>
                    <p>Número de documento: <input type="number" id="psn_form_id_number" name="psn_form_id_number"></p>
                    <p>Nombres: <input type="text" id="psn_form_name" name="psn_form_name" placeholder="Nombres">
                    Apellidos: <input type="text" id="psn_form_surname" name="psn_form_surname" placeholder="Apellidos"></p>
                    <p>Fecha de nacimiento: <input type="date" id="psn_form_birthdate" name="psn_form_birthdate">
                    Género: <select name="psn_form_gender" id="psn_form_gender">
                        <option>M</option>
                        <option>F</option>
                    </select>
                    Vacuna: <select name="psn_form_vaccine" id="psn_form_vaccine">
                        <option>Pfizer/BioNTech</option>
                        <option>Moderna</option>
                        <option>Janssen</option>
                        <option>Sinovac</option>
                        <option>Coronavac</option>
                        <option>AstraZeneca</option>
                        <option>Otra</option>
                        <option selected>Ninguna</option>
                    </select></p>
                    <p>
                        <input type="submit" value="Guardar">
                        <input type="submit" value="Eliminar">
                        <input type="submit" value="Buscar">
                        <input type="reset" value="Limpiar">
                    </p>
                </form>
            </div> -->

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
    return {}

    },
    created: function() {

    },
methods: {

    }

}
</script>

<style>

</style>