<template>
    <v-layout>
        <v-flex>
            <v-card>
                <v-card-text>
                    <h3>Bienvenido: {{usuario.nombre}}</h3>
                </v-card-text>

                <v-card-text>
                    <div class="text-right mr-2">
                        <v-chip>
                            <v-avatar>
                                <img :src="usuario.foto" alt="">
                            </v-avatar> Mensaje de chat
                        </v-chip>
                        <p class="caption mr-2"> 06 febrero 2019 10AM</p>
                    </div>
                </v-card-text>
                <v-card-text>
                    <v-form @submit.prevent="enviarMensaje">
                        <v-text-field v-model="mensaje" label="Escribe tu mensaje"></v-text-field>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import  { mapState } from "vuex";
    export default {
        data(){
        return{
            mensaje: ''
        }
    },

    computed: {
            ...mapState(['usuario'])
        
    },
    methods: {
        enviarMensaje(){
            console.log('mensaje enviado', this.mensaje)
        }
    },
    }
</script>
