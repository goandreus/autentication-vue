<template>
    <v-layout justify-center mt-5>
        <v-flex xs12 sm8 md6 xl4>
            <v-card>
                <v-card-text class="display-1 text-uppercase  white--text
                text-xs-center" :class="registro ? 'success': 'accent'">
                    <span v-if="!registro">Ingreso</span>
                    <span v-if="registro">Registro</span>
                </v-card-text>

                <v-card-text>
                    <v-btn block color="error">
                        <v-icon left dark>fab fa-google</v-icon>
                        google
                    </v-btn>

                    <v-btn block color="info">
                        <v-icon left dark>fab fa-facebook-f</v-icon>
                        facebook
                    </v-btn>
                </v-card-text>

                <v-card-text>
                    <v-btn block @click="registro = true" v-if="!registro">No tienes cuenta? Registrate Aqui</v-btn>
                     <v-btn block @click="registro = false" v-if="registro">ya tienes cuenta? Ingresa Aqui</v-btn>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    data(){
        return{
            registro: false
        }
    },
}
</script>

