<template>
<component-main>
    <router-view/>
</component-main>

</template>

<script>

import ComponentMain from "@/views/ComponentMain";
import {mapGetters} from "vuex";
export default {
  name: "DashboardComponent",
  components: {ComponentMain, },
  computed: {
    ...mapGetters(['accessUserState',])
  },
  mounted() {
    if(!this.accessUserState) {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style scoped>

</style>
