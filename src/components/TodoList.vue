<template>
    <div class="todo-list">
      <div class="geser">
        <h1><u>Masukan noodbook belanjaan Anda</u></h1>
        <form @submit.prevent="submitTodo">
          <input type="text" v-model="localNewTodo" placeholder="Input barang..."/>
          <button type="submit" class="tambahkan">Memesan</button>
        </form>
        <h2>list daftar belanjaan Anda</h2>
        <div class="tengah">
          <ul>
            <li v-for="(todo, index) in filteredTodos" :key="index">
              <input type="checkbox" v-model="todo.done"/>
              <span :class="{ 'done': todo.done }">{{ todo.text }}</span>
              <button @click="removeTodo(index)">Membatalkan</button>
            </li>
          </ul>
          <button @click="removeAllTodos">Membatalkan Pesanan</button>
        </div>
      </div>
      <button @click="showActive">Tampilkan Yang Belum Selesai</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TodoList',
    props: {
      todos: Array,
      newTodo: String,
      filteredTodos: Array
    },
    data() {
      return {
        localNewTodo: '' // Membuat localNewTodo kosong saat komponen dimuat
      };
    },
    methods: {
      submitTodo() {
        if (!this.localNewTodo.trim()) return; // Menghindari menambahkan todo kosong
        this.$emit('add-todo', this.localNewTodo);
        this.localNewTodo = ''; // Reset input field after adding todo
      },
      removeTodo(index) {
        this.$emit('remove-todo', index);
      },
      removeAllTodos() {
        this.todos.forEach((todo, index) => this.removeTodo(index));
      },
      showActive() {
        this.$emit('show-active');
      }
    }
  };
  </script>
  
  <style scoped>
 .todo-list {
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 400px;
  margin: auto;
  transition: box-shadow 0.3s;
}

.todo-list:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* ... */
.tambahkan {
  background-color: #5cb85c;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
}

.tambahkan:hover {
  background-color: #4cae4c;
  transform: translateY(-2px);
}
  
  .geser {
    margin-bottom: 20px;
  }
  
  h1, h2 {
    color: #333;
  }
  
  form {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  input[type="text"] {
    flex-grow: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .tambahkan {
    background-color: #5cb85c;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .tambahkan:hover {
    background-color: #4cae4c;
  }
  
  .tengah ul {
    list-style: none;
    padding: 0;
  }
  
  .tengah button {
    background-color: #d9534f;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: 20px;
  }
  
  .tengah button:hover {
    background-color: #c9302c;
  }
  
  button {
    background-color: #f0ad4e;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: 20px;
  }
  
  button:hover {
    background-color: #ec971f;
  }
  </style>
  