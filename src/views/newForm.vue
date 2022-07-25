<template>
<div>
  <h1>Form</h1>
  <div class="row">
    <div class="div-form-label">
      <span class="span-title">Nombre</span>
    </div>
    <div class="div-form">
      <input class="input-form">
    </div>
  </div>
  <div class="row">
    <div class="div-form-label">
      <span class="span-title">Apellido</span>
    </div>
    <div class="div-form">
      <input class="input-form">
    </div>
  </div>
  <div class="row">
    <div class="div-form-label">
      <span class="span-title">Correo</span>
    </div>
    <div class="div-form">
      <input class="input-form">
    </div>
  </div>
  <div class="row">
    <div class="div-form-label">
      <span class="span-title">Contraseña</span>
    </div>
    <div class="div-form">
      <input class="input-form">
    </div>
  </div>
  <div class="row">
    <div class="div-form-label">
      <span class="span-title">Verifcar contraseña</span>
    </div>
    <div class="div-form">
      <input class="input-form">
    </div>
  </div>

  <div class="div-form-button">
    <button class="button">Regístrate</button>
  </div>



</div>
</template>

<script>
export default {
  name: "newForm"
}
</script>

<style scoped>
.span-title {
  margin-right: 30px;
}
.div-form-label {
  width: 40%;
  text-align: end;
}
.row {
display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.input-form {
 border-radius:10px ;
  padding: 10px 32px;
  width: 20%;
}
.div-form {
  margin-top: 20px;
  width: 50%;
  text-align: start;
}
.button {
  background-color: #54AcF0;
  border-color: black;
  cursor: pointer;
  margin: 4px 2px;
  padding: 15px 32px;
  font-size: 14px;
  border-radius: 10px;
}
.div-form-button {
  text-align: center;
}
</style>
