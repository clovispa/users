<template>
  <div class="header">
    <div class="grid-container">
      <div class="div-color">
      </div>
      <div class="div-container" >
        <h6 @click="goDashboar" ><font-awesome-icon class="icon-group" icon="bars"/>Dashboard</h6>
      </div>
      <div class="color-div">
        <h6><font-awesome-icon class="icon-group-user" icon="circle"/> Marlene Sasouer</h6>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  name: "HeaderSection",
  methods: {
    goDashboar() {
      this.$router.push({ path: '/dashboardComponent' })
    }
  }
}
</script>

<style scoped>
.div-color {
  background: #F5F6FA;
}
.color-div {
  background: #ffffff;
}
.div-container {
  background: #ffffff;
  text-align: start;
  padding-left: 24px;
}
.grid-container  {
  display: grid;
  grid-template-columns: 10% 50% 33% ;
}
.icon-group {
  color: #969b98;
  padding-right: 3px;
}
.icon-group-user {
  font-size: 25px;
  padding-right: 3px;
  color: darkgoldenrod;
}
</style>
