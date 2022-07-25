<template>
  <div class="modal" v-if="showModal" >
    <div class="modal_content">
      <div class="">
        <span class="close" @click="closeModal">&times;</span>
        <br>
        <br>
      </div>
      <div class="container" >
        <div class="mb-3">
          <h3 >¿Desea eliminar usuario?</h3>
        </div>
      </div>
      <div class="flex-container-card ">
        <div class="container">
          <button @click="deletedUser" class="button-class ">SI</button>
        </div>
        <div class="container">
          <button @click="closeModal" class="button-class-secundary">NO</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalGeneral",
  props: {
    showModal: {
      type: Boolean,
      required: true,
      default: false
    },
  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
    },
    deletedUser() {
      this.$emit('deletedUser')
      this.$emit('closeModal')
    }
  }
}
</script>


<style lang="scss" scoped>
.container {
  text-align: center;

}
.button-class {
  background-color: #3258ce;
  border-radius: 20px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.button-class-secundary {
  background-color: #9195a6;
  border-radius: 20px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.flex-container-card {
  display: grid;
  grid-template-columns: auto 50%;
}
.modal_content {
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
}
.modal {
  display: block;
  padding-top: 80px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 5;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
}
@keyframes animatetop {
  from {top:-300px; opacity:0}
  to {top:0; opacity:1}
}

@-webkit-keyframes animatetop {
  from {top:-300px; opacity:0}
  to {top:0; opacity:1}
}



.close {
  right: 10px;
  color: #2d24a6;
  float: right;
  font-size: 28px;
  position: absolute;
  top: 10px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  cursor: pointer;
  text-decoration: none;
}

@media (min-width: 768px) {
  .modal_content {
    max-width: 400px;
    height: 200px;
  }
}

</style>
