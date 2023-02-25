<template>
    <h1>Listado Categorías</h1>

    <!-- <div v-for="c in categories" :key="c.id">
        <p>{{ c.title }}</p>
    </div> -->

    <router-link :to="{ name: 'list-type' }">Categorías</router-link>

    <div v-if="categories">
        <img :src="categories" alt="Imagen de categoría"/>
    </div>
    <div v-else>
        <p>Cargando...</p>
    </div>

</template>
<script>
export default {
    data(){
        return{
            categories:[]
        }
    },
    mounted(){
        this.$axios.get("https://aws.random.cat/meow?ref=apilist.fun")
        .then((res)=>{
            console.log(res.data.file)
            this.categories = res.data.file
        })
    }
}

</script>