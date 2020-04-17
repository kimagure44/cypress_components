<template>
  <q-page>
    <div class="row">
      <div class="col">
        <div id="resultID" v-text="id"></div>
        <div name="resultNAME" v-text="name"></div>
        <div class="resultCLASS" v-text="className"></div>
        <div v-text="tagName"></div>
        <div>
          <button id="btnID" @click="btnID">Click ID</button>
          <button id="btnNAME" @click="btnNAME">Click NAME</button>
          <button id="btnCLASS" @click="btnCLASS">Click CLASS</button>
          <button id="btnTAGNAME" @click="btnTAGNAME">Click TAGNAME</button>
        </div>
        <div>
          <button id="btnResetID" @click="btnResetID">Reset ID</button>
          <button id="btnResetNAME" @click="btnResetNAME">Reset NAME</button>
          <button id="btnResetCLASS" @click="btnResetCLASS">Reset CLASS</button>
          <button id="btnResetTAGNAME" @click="btnResetTAGNAME">Reset TAGNAME</button>
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
      name: '',
      className: '',
      tagName: '',
    };
  },
  methods: {
    btnID() {
      this.id = 'Acceso por el ID';
    },
    btnNAME() {
      this.name = 'Acceso por el NAME';
    },
    btnCLASS() {
      this.className = 'Acceso por la CLASE';
    },
    btnTAGNAME() {
      this.tagName = 'Acceso por el TAGNAME';
    },
    btnResetID() {
      this.id = '';
    },
    btnResetNAME() {
      this.name = '';
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
    div {
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
</style>
