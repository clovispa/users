<template>
<div class="todoListContainer">
  <div class="heading">
    <h2 id="title">
      <add-item @addItem="addItem" />
    </h2>
  </div>
  <list-view :item="dataTodo" @deletedItem="deletedItem"/>
</div>
</template>

<script>
import AddItem from "@/components/componentTodo/addItem";
import ListView from "@/views/listView";
import {mapGetters} from "vuex";
export default {
  name: "componentTodoItem",
  components: {ListView, AddItem},
  data() {
    return {
      dataTodo: [],
    }
  },
  computed: {
    ...mapGetters(['userTodoState',])
  },
  mounted() {
    this.dataTodo = this.userTodoState;
  },
  updated() {
    this.dataTodo ;
  },
  methods: {
    addItem(item) {
      this.dataTodo = [...this.dataTodo, item]
    },

    deletedItem(id) {
      this.dataTodo = this.dataTodo.filter((todo) => todo.id !== id)
    },

  }
}
</script>

<style scoped>
.todoListContainer {
  width: 750px;
  margin: auto;
}

.heading {
  background: #d4d5d5;
  padding: 10px;
}
#title {
  text-align: center;
}

</style>
