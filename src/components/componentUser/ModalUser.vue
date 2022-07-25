<template>
  <div class="modal" v-if="openModal" >
    <div class="modal_content">
      <div class="">
        <span class="close" @click="closeModal">&times;</span>
        <br>
        <br>
      </div>
      <div class="container" >
        <div class="mb-3">
          <h3 >Agregar usuario</h3>
        </div>
      </div>
      <div>
          <label for="fname">Name</label>
          <input type="text" v-model="jsonUser.name" id="fname" name="firstname" placeholder="Your name..">

          <label >LastName</label>
          <input type="text" v-model="jsonUser.lastName" name="lastname" placeholder="Your last name..">
          <label >Email</label>
          <input type="text" v-model="jsonUser.email" name="Email" placeholder="Your Email..">
          <label >Address</label>
          <input type="text" v-model="jsonUser.address" name="Address" placeholder="Your Address..">
          <label >Company</label>
          <input type="text" v-model="jsonUser.company" name="Company" placeholder="Your Company..">
          <input type="submit" @click="addUser" value="Guardar">
      </div>
      </div>

    </div>

</template>

<script>
export default {
  name: "ModalGeneral",
  props: {
    openModal: {
      type: Boolean,
      required: false,
      default: false
    },
  },
  data() {
    return {
     jsonUser: {
       id: '',
       name: '',
       lastName: '',
       email: '',
       address: '',
       company: ''
     }
    }
  },
  mounted() {

  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
      this.jsonUser.id= ''
      this.jsonUser.name= ''
      this.jsonUser.lastName= ''
      this.jsonUser.email= ''
      this.jsonUser.address= ''
      this.jsonUser.company= ''
    },
    addUser() {
      this.jsonUser.id = Date.now();
      this.$emit('addUser', this.jsonUser)
      this.$emit('closeModal')
    }
  }
}
</script>


<style lang="scss" scoped>
input[type=text],  {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.mb-3 {
  padding-top: 2px;
  padding-bottom: 2px;
}
input[type=submit] {
  width: 100%;
  background-color: #2014e8;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
.container {
  text-align: center;
  padding-top: 0px;
  padding-bottom: 0px;
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
