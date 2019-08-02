import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from "@/firebase"
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: {}
  },
  mutations: {
    nuevoUsuario(state, payload){
      state.usuario = payload
    }
  },
  actions: {
    setUsuario({commit}, user){
      const usuario = {
        nombre: user.displayName,
        email: user.email,
        uid: user.uid,
        foto: user.photoURL
    }
    commit('nuevoUsuario',usuario)
    },
    cerrarSesion({commit}){
      auth.signOut()
      commit('nuevoUsuario', null)
      router.push({name: 'ingreso'})
    }
  },
  
})
