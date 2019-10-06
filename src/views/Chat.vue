<template>
    <v-layout>
        <v-flex>
            <v-card>
                <v-card-text>
                    <h3>Bienvenido usuario {{usuario.nombre}}</h3>
                </v-card-text>

                <v-card-text style="height: 60vh; overflow: auto" v-chat-scroll> 
                    <div :class="item.nombre === usuario.nombre  ? 'text-right' : 'text-left'"
                    v-for="(item, index) in mensajes" :key="index"
                    >
                        <v-chip>
                            <v-avatar>
                                <img :src="item.foto" alt="">
                            </v-avatar> {{item.mensaje}}
                        </v-chip>
                        <p class="caption mr-2"> {{item.fecha}}</p>
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
    import moment from 'moment'

    export default {
        data(){
        return{
            valido: false,
            mensaje: '',
            reglas: [
                v => !!v || 'Tienes que escribir un mensaje'
            ],
            mensajes: [

            ]
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
                fecha: Date.now()
            }).catch(error => console.log(error))
            this.mensaje = ''
            }else{
                console.log('mensaje vacio');
            }
        }
    },

    created(){
        moment.locale('es');
        let ref = db.collection('chats').orderBy('fecha','desc').limit(10)

        ref.onSnapshot(querySnapshot => {
            this.mensajes = []

            querySnapshot.forEach( doc =>{
                this.mensajes.unshift({
                    mensaje: doc.data().mensaje,
                    foto: doc.data().foto,
                    nombre: doc.data().nombre,
                    fecha:  moment(doc.data().fecha).format('lll'),
                })
            });
            
            console.log(this.mensajes)
        })
    }
    }
</script>
