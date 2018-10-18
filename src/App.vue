<template>
  <v-app>
    
    <Navbar v-if="usuario != '' "></Navbar>

    <v-content>
      <v-container>
        <router-view/>
      </v-container>
    </v-content>
 
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
import { mapState } from "vuex";

export default {
  components: {Navbar},
  name: 'App',
  data () {
    return {
      
    }
  },
  computed:{
    ...mapState(['usuario'])
  }
}
</script>
