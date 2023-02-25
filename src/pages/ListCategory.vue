<template>
    <h1>Listado</h1>
</template>
<script>
export default {
    mounted(){
        this.$axios.get("https://aws.random.cat/meow?ref=apilist.fun")
        .then((res)=>{
            console.log(res.data)
        })
    }
}
</script>