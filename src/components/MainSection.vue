<template>
  <div class="mainsection">
    <div>
      <div class="grid-container">
        <div class="div-color" >
        </div>
        <div class="button-div">
        </div>
        <div class="div-color">

        </div>
        <slot name="pages-user">
        <div class="div-slot">
        <table-user/>
        </div>
    </slot>
      </div>
    </div>

  </div>
</template>

<script>



import TableUser from "@/components/componentUser/TableUser";

export default {
  name: "MainSection",
  data() {
    return {
    }
  },
  components: { TableUser},
}
</script>

<style scoped>
.grid-container  {
  display: grid;
  grid-template-columns: 10%  81% ;
}
.div-color {
  background: #F5F6FA
}
.div-slot {
  background: #ffffff;
  height: 100vh;
}

.button-div {
  background: #F5F6FA;
  text-align: start;
  padding-top: 24px;
  padding-bottom: 24px;
}
</style>
