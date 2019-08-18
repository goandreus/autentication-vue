<template>
  <nav>
    <v-app-bar color="green" app>
      <v-app-bar-nav-icon @click="drawer = !drawer" ></v-app-bar-nav-icon>
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
    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer" class="green" app>

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


        <v-list-item v-for="(item, index) in items" :key="index"
        :to="item.to" color="white">
          <v-list-item-icon>
              <v-icon color="white">{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content color="accent">
              <v-list-item-title color="success">{{ item.title }}</v-list-item-title>
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
      drawer: false,
      items: [
          { title: 'Dashboard', icon: 'fas fa-address-card', to: {name:'home'} },
          { title: 'Account', icon: 'fas fa-address-card', to: {name:'ingreso'} },
          { title: 'Admin', icon: 'fas fa-address-card', to: {name:'admin'} },
        { title: 'Chat', icon: 'fas fa-address-card', to: {name:'chat'} },
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
