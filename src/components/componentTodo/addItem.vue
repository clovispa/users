<template>
<div class="addItem">
  <input v-model="item.title" type="text">
  <font-awesome-icon @click="addItem()" :class="[item.title ? 'active' : 'inactive',  'plus']" icon="plus-square"/>
</div>
</template>

<script>
export default {
  name: "addItem",
  data() {
    return {
      item: {
        title: "",
        completed:false,
        userId: ''
      }
    }
  },
  methods: {
     addItem() {
      if(this.item.title == '') {
        return;
      }
      this.$emit('addItem', this.item)

    },

  }
}
</script>

<style scoped>
.addItem {
  display: flex;
  justify-content: center;
  align-items: center;
}
input {
  background: #ffffff;
  border: 0px;
  outline: none;
  padding: 5px;
  margin-right: 10px;
  width: 100%;
}
.plus {
  font-size: 20px;
}
.active {
  color: #35dc3d;
}
.inactive {
  color: gray;
}
</style>
