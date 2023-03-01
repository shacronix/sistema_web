<template>
    <div>
        <h1>Listado Categorías</h1>
        <router-link :to="{ name: 'list-type' }">Tipos</router-link>

    </div>

    <div>
        <label>Token:</label> {{ token }}
    </div>

    <div>
        <button @click="obtenerDatos">Obtener datos</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            token: ''
        }
    },
    mounted() {
        const token = JSON.parse(localStorage.getItem('token'))
        this.token = token
    },
    methods: {
        obtenerDatos() {
            const token = JSON.parse(localStorage.getItem('token_autorization'))
            this.$axios.get('http://192.168.1.201:8000/api/roles_permissions', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>

