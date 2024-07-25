<template>
  <div class="todo-list">
    <h1 class="navbar navbar-dark bg-primary" style="background-color: #e3f2fd;">My Todo List</h1>
    <form @submit.prevent="addTodo">
      <input v-model="newTodoText" placeholder="Add a new todo"/>
      <button type="submit" class="btn btn-primary mr-5">Add</button>
    </form>
    <div v-for="todo in todos" :key="todo.id" class="p-2 bg-light border">
      <TodoItem
        :todo="todo"
        @edit="showEditForm"
        @remove="removeTodo"
      />
    </div>
    <div v-if="editTodo">
      <h2>Edit Todo</h2>
      <input v-model="editTodo.text" />
      <button @click="updateTodo">Update</button>
      <button @click="cancelEdit">Cancel</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import TodoItem from './TodoItem.vue';

export default {
  components: {
    TodoItem
  },
  data() {
    return {
      newTodoText: '',
      todos: [],
      editTodo: null
    }
  },
  methods: {
    async fetchTodos() {
      const response = await axios.get('http://XXXXXXXXXXXXXXXXXXXX/todos');
      this.todos = response.data;
    },
    async addTodo() {
      if (this.newTodoText.trim() === '') return;

      const newTodo = {
        text: this.newTodoText,
        completed: false
      };

      const response = await axios.post('http://XXXXXXXXXXXXXXXXXXXX/todos', newTodo);
      this.todos.push(response.data);
      this.newTodoText = '';
    },
    async showEditForm(todo) {
      this.editTodo = { ...todo };
    },
    async updateTodo() {
      await axios.put(`http://XXXXXXXXXXXXXXXXXXXX/todos/${this.editTodo.id}`, this.editTodo);
      const index = this.todos.findIndex(todo => todo.id === this.editTodo.id);
      this.todos[index] = this.editTodo;
      this.editTodo = null;
    },
    async cancelEdit() {
      this.editTodo = null;
    },
    async removeTodo(id) {
      await axios.delete(`http://XXXXXXXXXXXXXXXXXXXX/todos/${id}`);
      this.todos = this.todos.filter(todo => todo.id !== id);
    }
  },
  mounted() {
    this.fetchTodos();
  }
}
</script>

