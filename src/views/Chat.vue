<template>
    <v-layout>
        <v-flex>
            <v-card>
                <v-card-text>
                    <h3>Bienvenido: {{usuario.nombre}}</h3>
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
            
        }
    },

    computed: {
            ...mapState(['usuario'])
        },
    }
    
</script>
