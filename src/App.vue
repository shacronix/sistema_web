<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->

  <n-layout has-sider>
    <n-layout-sider content-style="padding: 24px;">



    </n-layout-sider>
    <n-layout>
      <n-layout-header>



      </n-layout-header>



      <n-layout-content content-style="padding: 24px;">

        <n-space justify="center">

          <template v-if="!isInicioSesion">
            <router-view></router-view>
          </template>


        </n-space>

      </n-layout-content>
      <n-layout-footer>



      </n-layout-footer>
    </n-layout>
  </n-layout>




  <template v-if="!isInicioSesion">

  </template>
  <template v-else>
    <n-space justify="center">
      <InicioSesion></InicioSesion>
    </n-space>

  </template>
</template>

<script>
import InicioSesion from "./pages/InicioSesion/InicioSesion.vue"

export default {
  name: 'App',
  components: {
    InicioSesion
  },
  computed: {
    isInicioSesion() {
      return this.$route.name === 'inicio_sesion'
    }
  }
}
</script>
