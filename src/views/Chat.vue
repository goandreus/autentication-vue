<template>
    <v-layout>
        <v-flex>
            <v-card>
                <v-card-text>
                    <h3>Bienvenido usuario {{usuario.nombre}}</h3>
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
                    <v-form @submit.prevent="enviarMensaje" v-model="valido">
                        <v-text-field
                         v-model="mensaje" 
                         label="Escribe tu mensaje"
                         required
                         :rules="reglas"
                         >
                         </v-text-field>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import  { mapState } from "vuex";
    import  { db }  from "@/firebase";
    export default {
        data(){
        return{
            valido: false,
            mensaje: '',
            reglas: [
                v => !!v || 'Tienes que escribir un mensaje'
            ],
        };
    },

    computed: {
            ...mapState(['usuario'])
        
    },
    methods: {

        enviarMensaje(){
            if(this.valido){
            console.log('mensaje enviado', this.mensaje);
            db.collection('chats').add({
                mensaje: this.mensaje,
                nombre: this.usuario.nombre,
                foto: this.usuario.foto,
                feccha: Date.now()
            }).catch(error => console.log(error))
            this.mensaje = ''
            }else{
                console.log('mensaje vacio');
            }
        }
    },
    }
</script>
