<template>
<div>
 <component-todo-item/>
</div>
</template>

<script>
import { mapGetters} from "vuex";
import ComponentTodoItem from "@/components/componentTodo/componentTodoItem";

export default {
  name: "componentTodos",
  components: {ComponentTodoItem},
  computed: {
    ...mapGetters(['userTodoState', 'accessUserState'])
  },
  mounted() {
    if(!this.accessUserState) {
      this.$router.push({ path: '/' })
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
