<template>
  <div class="todo-item">
    <input type="checkbox" :checked="todo.completed" @change="toggleCompleted" />
    <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
    <button @click="editTodo" class="btn btn-outline-primary me-md-2">Edit</button>
    <button @click="removeTodo" class="btn btn-outline-danger me-md-2">Delete</button>
  </div>
</template>
 
<script>
export default {
  props: {
    todo: Object
  },
  methods: {
    // Emit event to the parent component to toggle completion
    toggleCompleted(event) {
      this.$emit('update', { ...this.todo, completed: event.target.checked });
    },
    // Emit event to trigger the edit action
    editTodo() {
      this.$emit('edit', this.todo);
    },
    // Emit event to remove the todo item
    removeTodo() {
      this.$emit('remove', this.todo.id);
    }
  }
}
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>
