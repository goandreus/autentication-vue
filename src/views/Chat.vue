<template>
    <v-layout>
        <v-flex>
            <v-card>
                <v-card-text>
                    <h3>Bienvenido usuario {{usuario.nombre}}</h3>
                </v-card-text>

                <v-card-text>
                    <div class="text-right mr-2"
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
        let ref = db.collection('chats')

        ref.onSnapshot(querySnapshot => {
            this.mensajes = []
            querySnapshot.forEach( doc =>{
                this.mensajes.push(doc.data())
            });
            console.log(this.mensajes)
        })
    }
    }
</script>
