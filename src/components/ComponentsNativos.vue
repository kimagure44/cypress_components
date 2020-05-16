<template>
  <q-page>
    <div class="row">
      <div class="col">
        <div id="resultID" v-text="id"></div>
        <div name="resultATTR" v-text="attr"></div>
        <div class="resultCLASS" v-text="className"></div>
        <div v-text="tagName"></div>
        <div class="container">
          <table>
            <tbody>
              <tr>
                <td>A1</td>
                <td>B1</td>
                <td>C1</td>
              </tr>
              <tr>
                <td>A2</td>
                <td>B2</td>
                <td>C2</td>
              </tr>
              <tr>
                <td>A3</td>
                <td>B3</td>
                <td>C3</td>
              </tr>
              <tr>
                <td>A4</td>
                <td>B4</td>
                <td>C4</td>
              </tr>
              <tr>
                <td>A5</td>
                <td>B5</td>
                <td>C5</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="container">
          <button id="btnID" @click="btnID">Click ID</button>
          <button id="btnATTR" @click="btnATTR">Click ATTR</button>
          <button id="btnCLASS" @click="btnCLASS">Click CLASS</button>
          <button id="btnTAGNAME" @click="btnTAGNAME">Click TAGNAME</button>
        </div>
        <div class="container">
          <button id="btnResetID" @click="btnResetID">Reset ID</button>
          <button id="btnResetCLASS" @click="btnResetCLASS">Reset CLASS</button>
          <button id="btnResetTAGNAME" @click="btnResetTAGNAME">Reset TAGNAME</button>
        </div>
        <button id="btnResetATTR" @click="btnResetATTR">Reset ATTR</button>
        <div class="container">
          <form ref="form">
            <div class="container">
              <div>Nombre</div>
              <div><input type="text" id="nombre" v-model="nombre" /></div>
              <div><b>v-model:</b> {{ nombre }}</div>
            </div>
            <div class="container">
              <div>Apellido</div>
              <div><input type="text" id="apellido" v-model="apellido" /></div>
              <div><b>v-model:</b> {{ apellido }}</div>
            </div>
            <div class="container">
              <div for="edad">Edad</div>
              <div><input type="number" id="edad" v-model="edad" /></div>
              <div><b>v-model:</b> {{ edad }}</div>
            </div>
            <div class="container">
              <div for="password">Contraseña</div>
              <div><input type="password" id="password" v-model="password" /></div>
              <div><b>v-model:</b> {{ password }}</div>
            </div>
            <div class="container">
              <div>Selecciona un turno</div>
              <div>
                <input type="radio" id="turnoA" value="turnoA" v-model="radio" />
                <label for="turnoA">turnoA</label><br />
                <input type="radio" id="turnoB" value="turnoB" v-model="radio" />
                <label for="turnoB">turnoB</label><br />
                <input type="radio" id="turnoC" value="turnoC" v-model="radio" />
                <label for="turnoC">turnoC</label>
              </div>
              <div><b>v-model:</b>{{ radio }}</div>
            </div>
            <div class="container">
              <div>Selecciona uno o varios dispositivos</div>
              <div>
                <input type="checkbox" id="ordenador" value="Ordenador" v-model="check" />
                <label for="ordenador">Tengo ordenador</label><br />
                <input type="checkbox" id="tablet" value="Tablet" v-model="check" />
                <label for="tablet">Tengo tablet</label><br />
                <input type="checkbox" id="movil" value="Movil" v-model="check" />
                <label for="Movil">Tengo Movil</label><br />
                <input type="checkbox" id="portatil" value="Portatil" v-model="check" />
                <label for="Portatil">Tengo Portatil</label><br />
              </div>
              <div><b>v-model:</b>{{ check }}</div>
            </div>
            <div class="container">
              <div>Seleciona un color</div>
              <div><input type="color" v-model="color" /></div>
              <div><b>v-model:</b>{{ color }}</div>
            </div>
            <div class="container">
              <div>Cumpleaños</div>
              <div><input type="date" v-model="fecha" /></div>
              <div><b>v-model:</b>{{ convertDate }}</div>
            </div>
            <div class="container">
              <div>Hora de entrada</div>
              <div><input type="datetime-local" v-model="tiempo" /></div>
              <div><b>v-model:</b>{{ tiempo }}</div>
            </div>
            <div class="container">
              <div>Email</div>
              <div><input type="email" v-model="email" /></div>
              <div><b>v-model:</b>{{ email }}</div>
            </div>
            <div class="container">
              <div>Fichero</div>
              <div><input type="file" /></div>
            </div>
            <div class="container">
              <div>Imagen</div>
              <div><input type="image" /></div>
            </div>
            <div class="container">
              <div>Mes</div>
              <div><input type="month" /></div>
            </div>
            <div class="container">
              <div>Rango</div>
              <div><input type="range" /></div>
            </div>
            <div class="container">
              <div>Busqueda</div>
              <div><input type="search" /></div>
            </div>
            <div class="container">
              <div>Teléfono</div>
              <div><input type="tel" /></div>
            </div>
            <div class="container">
              <div for="texto">Texto</div>
              <div><input type="text" /></div>
            </div>
            <div class="container">
              <div>Hora</div>
              <div><input type="time" /></div>
            </div>
            <div class="container">
              <div>URL</div>
              <div><input type="url" /></div>
            </div>
            <div class="container">
              <div>Semana</div>
              <div><input type="week" /></div>
            </div>
            <div class="container">
              <input type="submit" value="Enviar" />
              <input type="reset" value="Reset" @click="reset" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style></style>

<script>
export default {
  name: 'ComponentsNativos',
  data() {
    return {
      id: '',
      attr: '',
      className: '',
      tagName: '',
      nombre: '',
      apellido: '',
      edad: '',
      password: '',
      radio: '',
      check: [],
      color: '',
      fecha: '',
      tiempo: '',
      email: '',
      fichero: '',
      imagen: '',
      mes: '',
      rango: '',
      busqueda: '',
      telefono: '',
      texto: '',
      hora: '',
      url: '',
      semana: '',
    };
  },
  computed: {
    convertDate() {
      const fecha = new Date(this.fecha);
      const optionsFormat = new Intl.DateTimeFormat('es-ES', {
        day: '2-digit',
        year: 'numeric',
        month: '2-digit',
      });
      return this.fecha ? optionsFormat.format(fecha) : '';
    },
  },
  methods: {
    btnID() {
      this.id = 'Acceso por el ID';
    },
    btnATTR() {
      this.attr = 'Acceso por el Atributo';
    },
    btnCLASS() {
      this.className = 'Acceso por la Clase';
    },
    btnTAGNAME() {
      this.tagName = 'Acceso por el Tagname';
    },
    btnResetID() {
      this.id = '';
    },
    btnResetATTR() {
      this.attr = '';
    },
    btnResetCLASS() {
      this.className = '';
    },
    btnResetTAGNAME() {
      this.tagName = '';
    },
    reset(evt) {
      evt.preventDefault();
      this.check = [];
      this.$refs.form.reset();
    },
  },
};
</script>
<style lang="scss" scoped>
.row {
  .col {
    .container {
      min-height: 100px;
      box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2);
      margin: 10px;
      padding: 10px;
    }
  }
}
button {
  cursor: pointer;
}
table {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  border: 1px solid #dddddd;
  tr {
    td {
      border: 1px solid #dddddd;
      padding: 5px;
    }
  }
}
</style>
