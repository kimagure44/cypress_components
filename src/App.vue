<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-toolbar-title>
          Realizando test E2E en los elementos nativos de HMTL
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <components-nativos />
    </q-page-container>
  </q-layout>
</template>

<script>
import ComponentsNativos from './components/ComponentsNativos.vue';

export default {
  name: 'LayoutDefault',

  components: {
    ComponentsNativos,
  },

  data() {
    return {
      leftDrawerOpen: false,
    };
  },
};
</script>

<style>
</style>
