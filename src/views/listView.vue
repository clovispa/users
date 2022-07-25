<template>
<div>
  <div v-for="(item, index) in item" :key="index">
    <list-item :item="item" class="item"  @deletedItem="deletedItem"/>
  </div>
</div>
</template>

<script>
import ListItem from "@/views/ListItem";
export default {
  name: "listView",
  components: {ListItem},
  props: {
    item: {
      type: Array,
      required: true
    }
  },

  methods: {
    deletedItem(item) {
      this.$emit('deletedItem', item)
    }
  }

}
</script>

<style scoped>
.item {
  background: #e6e6e6;
  padding: 5px;
  margin-top: 5px;
}
</style>
