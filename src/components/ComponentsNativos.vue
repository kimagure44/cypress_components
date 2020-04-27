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
          <button id="btnResetATTR" @click="btnResetATTR">Reset ATTR</button>
          <button id="btnResetCLASS" @click="btnResetCLASS">Reset CLASS</button>
          <button id="btnResetTAGNAME" @click="btnResetTAGNAME">Reset TAGNAME</button>
        </div>
        <div class="container">
          <form>
            <div class="container">
              <div class="input-float">
                <input type="text" id="nombre" placeholder=" " />
                <label for="nombre">Nombre</label>
              </div>
            </div>
            <div class="container">
              <div class="input-float">
                <input type="text" id="apellido" placeholder=" " />
                <label for="apellido">Apellido</label>
              </div>
            </div>
            <div class="container">
              <div class="input-float">
                <input type="number" id="edad" placeholder=" " />
                <label for="edad">Edad</label>
              </div>
            </div>
            <div class="container">
              <div class="input-float">
                <input type="password" id="password" placeholder=" " />
                <label for="password">Contraseña</label>
              </div>
            </div>
            <div class="container">
              <input type="radio" id="hombre" value="hombre">
              <label for="hombre">Hombre</label><br>
              <input type="radio" id="mujer" value="Mujer">
              <label for="female">Mujer</label><br>
              <input type="radio" id="otro" value="Otro">
              <label for="other">Otro</label>
            </div>
            <div class="container">
              <input type="checkbox" id="ordenador" value="Ordenador">
              <label for="ordenador">Tengo ordenador</label><br>
              <input type="checkbox" id="tablet" value="tablet">
              <label for="tablet">Tengo tablet</label><br>
              <input type="checkbox" id="Movil" value="Movil">
              <label for="Movil">Tengo Movil</label><br>
              <input type="checkbox" id="Portatil" value="Portatil">
              <label for="Portatil">Tengo Portatil</label><br>
            </div>
            <div class="container">
              <label for="color">Seleciona un color</label>
              <input type="color">
            </div>
            <div class="container">
              <label for="cumpleaños">Cumpleaños</label>
              <input type="date" />
            </div>
            <div class="container">
              <label for="cumpleaños">Hora de entrada</label>
              <input type="datetime-local" />
            </div>
            <div class="container">
              <label for="email">Email</label>
              <input type="email" />
            </div>
            <div class="container">
              <input type="file">
            </div>
            <div class="container">
              <input type="image">
            </div>
            <div class="container">
              <input type="month">
            </div>
            <div class="container">
              <input type="range">
            </div>
            <div class="container">
              <input type="search">
            </div>
            <div class="container">
              <input type="tel">
            </div>
            <div class="container">
              <label for="texto">Texto</label>
              <input type="text">
            </div>
            <div class="container">
              <label for="hora">Hora</label>
              <input type="time">
            </div>
            <div class="container">
              <label for="url">URL</label>
              <input type="url">
            </div>
            <div class="container">
              <label for="semana">Semana</label>
              <input type="week">
            </div>
            <div class="container">
              <input type="submit" value="Enviar" />
              <input type="reset" value="Reset" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'ComponentsNativos',
  data() {
    return {
      id: '',
      attr: '',
      className: '',
      tagName: '',
    };
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
  },
};
</script>
<style lang="scss" scoped>
.row {
  .col {
    .container {
      min-height: 100px;
      box-shadow: 0 0 8px 2px rgba(0, 0, 0, .2);
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
.input-float {
  input {
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid #cccccc;
    width: 100%;
    position: relative;
    left: 0;
    top: 15px;
    background: transparent;
    padding: 20px 10px 0 10px;
    transition: 180ms ease-in-out;
    &:not(:placeholder-shown) + label {
      transition: 180ms ease-in-out;
      top: -30px;
      font-size: 10px;
    }
    &:focus + label {
      transition: 180ms ease-in-out;
      top: -30px;
      font-size: 10px;
    }
    &:focus {
      background: #ececec;
      transition: 180ms ease-in-out;
    }
  }
  label {
    position: relative;
    top: -7px;
    left: 10px;
    font-size: 14px;
    color: #bbbbbb;
    transition: 180ms ease-in-out;
  }
}
:focus {
  outline: 0px;
}
</style>
