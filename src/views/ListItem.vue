<template>
<div class="item">
  <input type="checkbox"  v-model="todoitem.completed">
 <span :class="[todoitem.completed ? 'completed' : '', 'itemText']">{{todoitem.title}}</span>
  <button  class="trashcan">
    <font-awesome-icon icon="trash" @click="deleted(todoitem)"/>
  </button>
</div>
</template>

<script>
export default {
  name: "ListItem",
  props:['item'],
  data() {
    return {
      todoitem: {
        completed: '',
        title: '',
        userId: '' ,
        id: ''
      }
    }
  },
  mounted() {
    this.todoitem = Object.assign({} , this.item)
  },
  methods: {
    deleted(item) {
      this.$emit('deletedItem',  item.id)

    },
  }
}
</script>

<style scoped>
.completed {
  text-decoration: line-through;
  color: #999999;
}
.itemText {
  width: 100%;
  margin-left: 20px;
}
.item {
  display: flex;
  justify-content: center;
  align-items: center;
}
.trashcan {
  background: #e6e6e6;
  border: none;
  color: #FF0000;
  outline: none;
}
</style>
