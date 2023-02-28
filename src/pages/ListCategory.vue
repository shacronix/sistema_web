<template>
    <div>
        <h1>Listado Categorías</h1>
        <router-link :to="{ name: 'list-type' }">Tipos</router-link>

        <form @submit.prevent="submitForm">
            <label>
                Campo 1:
                <input type="text" v-model="email">
            </label>
            <br>
            <label>
                Campo 2:
                <input type="text" v-model="password">
            </label>
            <br>
            <button type="submit">Enviar</button>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        submitForm() {
            const data = {
                email: this.email,
                password: this.password,
            };

            this.$axios.post('http://192.168.1.201:8000/api/login', data)
                .then((res) => {
                    console.log(res.data);
                    // ...
                })
                .catch((err) => {
                    console.error(err);
                });

        },
    },
}
</script>

