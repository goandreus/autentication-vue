<template>
    <nav>
        <v-app-bar app>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title class="headline text-uppercase">
        <router-link :to="{name:'home'}">
          <span>Vue</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="cerrarSesion">
        <span class="mr-2">Cerrar Sesion</span>
        <v-icon>fas fa-address-book</v-icon>
      </v-btn>
    </v-app-bar>
    </nav>
</template>


<script>
import { mapActions } from 'vuex';
export default {
    methods:{
    ...mapActions(['cerrarSesion'])
    }
}
</script>