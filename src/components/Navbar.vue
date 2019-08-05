<template>
  <nav>
    <v-toolbar app>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <router-link :to="{name:'home'}">
          <span>Vue</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="cerrarSesion">
        <span class="mr-2">Cerrar sesión</span>
        <v-icon>fas fa-address-book</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer  class="indigo" v-model="drawer" app>

      <v-layout column align-center mt-5>
        <v-flex>
          <v-avatar>
          <img :src="usuario.foto" alt="avatar">
        </v-avatar>
        </v-flex>
        <v-flex>
          <p class="mt-3 white--text">{{usuario.nombre}}</p>
        </v-flex>
      </v-layout>

      <v-divider></v-divider>

      <v-list-item>
        <v-list-item-content v-for="(item, index) in items" :key="index"
        :to="item.to">
          <v-list-tile-action>
            <v-icon class="white--text">{{item.icon}}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title  class="white--text">{{item.title}}</v-list-tile-title>
          </v-list-tile-content>

        </v-list-item-content>

      </v-list-item>

    </v-navigation-drawer>

  </nav>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      drawer: true,
      items: [
          { title: 'Dashboard', icon: 'fas fa-address-card', to: {name:'home'} },
          { title: 'Account', icon: 'fas fa-address-card', to: {name:'ingreso'} },
          { title: 'Admin', icon: 'fas fa-address-card', to: {name:'admin'} }
        ]
    }
  },
  methods:{
    ...mapActions(['cerrarSesion'])
  },
  computed:{
    ...mapState(['usuario'])
  }
}
</script>
