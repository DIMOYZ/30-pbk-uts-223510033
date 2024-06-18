<template>
  <q-layout view="hHh lpR fFf">
    <q-header>
      <q-toolbar>
        <q-toolbar-title>{{ brand }}</q-toolbar-title>
        <q-btn flat @click="$router.push('/todos')">Todos</q-btn>
        <q-btn flat @click="$router.push('/posts')">Posts</q-btn>
        <q-btn flat @click="$router.push('/albums')">Albums</q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view
        :todos="todos"
        :filteredTodos="filteredTodos"
        :filter="filter"
        @add-todo="addTodo"
        @remove-todo="removeTodo"
        @show-active="showActive"
      />
      <Biodata />
    </q-page-container>

    <q-footer>
      <q-toolbar>
        <q-toolbar-title>Copyright &copy;SULTAN FADHIL</q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: 'App',
  setup() {
    const brand = 'Selamat Datang di Nootbook DIMOY';

    return {
      brand
    };
  },
  data() {
    return {
      todos: [],
      filter: 'all'
    };
  },
  computed: {
    filteredTodos() {
      switch (this.filter) {
        case 'active':
          return this.todos.filter(todo => !todo.done);
        default:
          return this.todos;
      }
    }
  },
  methods: {
    addTodo(todoText) {
      if (!todoText.trim()) return;
      this.todos.push({
        text: todoText,
        done: false
      });
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    showActive() {
      this.filter = 'active';
    }
  },
  components: {
    Biodata: {
      template: `
        <div class="biodata">
          <h2>Biodata</h2>
          <p><strong>Nama:</strong> Sultan Fadhil</p>
          <p><strong>Umur:</strong> 25 tahun</p>
          <p><strong>Profesi:</strong> Software Developer</p>
          <p><strong>Hobi:</strong> Membaca, Menulis, Coding</p>
        </div>
      `
    }
  }
};
</script>

<style scoped>
.latar {
  background-color: #f5f5f5;
}
.biodata {
  margin-top: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.biodata h2 {
  margin-bottom: 10px;
}
.biodata p {
  margin: 5px 0;
}
</style>
