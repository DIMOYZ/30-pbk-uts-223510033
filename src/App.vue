<template>
  <div id="app" class="latar">
    <!-- Navbar -->
    <nav class="navbar">
      <div class="logo">
        <img src="../src/assets/3.jpg" alt="">
      </div>
      <div class="container">
        <span class="navbar-brand"><u>Selamat Datang di Nootbook DIMOY</u></span>
        <span class="navbar-moto"><u>Kesenangan anda adalah kesenangan kami</u></span>
      </div>
    </nav>
    <br>

    <!-- Main Content -->
    <main>
      <header>
        <nav>
          <ul>
            <li @click="showTodos">Todos</li>
            <li @click="showPosts">Posts</li>
          </ul>
        </nav>
      </header>
      
      <div v-if="activeMenu === 'todos'">
        <div class="todo-list">
          <div class="geser">
            <h1><u>Masukan noodbook belanjaan Anda</u></h1>
            <form @submit.prevent="addTodo">
              <input type="text" v-model="newTodo" placeholder="Input barang..."/>
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
              <button @click="removeTodo">Membatalkan Pesanan</button>
            </div>
          </div>
        </div>
        <button @click="showActive">Tampilkan Yang Belum Selesai</button>
      </div>
      
      <div v-else-if="activeMenu === 'posts'">
        <h2>Postingan</h2>
        <select v-model="selectedUser">
          <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
        </select>
        <div v-if="selectedUser">
          <div v-for="post in filteredPosts" :key="post.id">
            <h3>{{ post.title }}</h3>
            <p>{{ post.body }}</p>
          </div>
        </div>
        <div v-else>
          <p>Silakan pilih pengguna untuk melihat postingan mereka.</p>
        </div>
      </div>
    </main>

    <br>
    <footer>
      <p>Copyright &copy;SULTAN FADHIL</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      newTodo: '',
      todos: [],
      filter: 'all',
      activeMenu: 'todos',
      users: [],
      posts: [],
      selectedUser: null
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim().length === 0) {
        return;
      }
      this.todos.push({
        text: this.newTodo,
        done: false
      });
      this.newTodo = '';
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    showAll() {
      this.filter = 'all';
    },
    showActive() {
      this.filter = 'active';
    },
    showCompleted() {
      this.filter = 'completed';
    },
    showTodos() {
      this.activeMenu = 'todos';
    },
    showPosts() {
      this.activeMenu = 'posts';
    }
  },
  computed: {
    filteredTodos() {
      switch (this.filter) {
        case 'active':
          return this.todos.filter(todo => !todo.done);
        case 'completed':
          return this.todos.filter(todo => todo.done);
        default:
          return this.todos;
      }
    },
    filteredPosts() {
      return this.posts.filter(post => post.userId === parseInt(this.selectedUser));
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        this.users = data;
      });

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        this.posts = data;
      });
  }
};
</script>

<style>
/* Add your existing styles here */

.geser {
  overflow-y: auto;
  height: auto;
}

.logo {
  float: left;
  margin-right: 10px;
}

.logo img {
  width: 30%;
  height: auto;
  border-bottom: #0dd63f;
  box-shadow: #23a6d5;
}

.latar {
  background-color: #fff;
  background-size: cover;
  background-position: center;
}

.todo-list {
  border: 1px solid black;
  width: 500px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 0px 0px 20px rgba(red, green, blue, alpha);
  border-radius: 20px;
  background: url('assets/1.jpeg');
  background-size: cover;
  background-position: center;
  overflow: hidden;
  box-sizing: border-box;
  padding: 40px;
}

.todo-list h1 {
  text-align: center;
  color: white;
  font-size: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.todo-list form {
  display: flex;
  margin-bottom: 20px;
}

.todo-list input[type=text] {
  flex: 1;
  padding: 8px;
  font-size: 1.2rem;
  border-radius: 10px;
  flex-direction: column;
  box-shadow: #23a6d5;
}

.todo-list button[type=submit] {
  margin-left: 10px;
  padding: 8px;
  font-size: 1.2rem;
  background-color: #0dd63f;
  border-radius: 10px;
}

.todo-list h2 {
  text-align: center;
  color: aliceblue;
}

.todo-list ul {
  list-style: none;
  padding: 0;
}

.todo-list li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.todo-list input[type=checkbox] {
  margin-right: 10px;
}

.todo-list .done {
  text-decoration: line-through;
  color: red;
}

.todo-list .checkbox:checked + span {
  color: red;
}

.todo-list button {
  margin-left: 10px;
  padding: 8px;
  background-color: #27c607;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: #fff;
  border-radius: 10px;
}

.tengah {
  margin-left: 20%;
}

footer {
  text-align: center;
  background-color: yellow;
  padding: 20px 0;
  font-size: 1.2rem;
  color: black;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
}

footer a {
  color: black;
  text-decoration: none;
  margin: 0 10px;
}

footer a:hover {
  text-decoration: underline;
}

footer .social-media-icon {
  padding: 0 5px;
  font-size: 1.5rem;
}

.todo-list ul li span {
  font-size: 1.2rem;
  gap: 20px;
  color: aliceblue;
}

.todo-list ul li {
  padding: 5px 0;
}

.todo-list ul li button {
  padding: 10px 15px;
  font-size: 1rem;
}

.navbar {
  background-color: yellow;
  color: black;
  padding: 10px 20px;
  text-align: center;
  height: 100px;
}

.container {
  max-width: 1500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: url('assets/5.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  box-shadow: #23a6d5;
}

.navbar-brand {
  padding: 10px;
  font-weight: bold;
  font-size: 1.5rem;
}

.navbar-moto {
  padding: 10px;
  margin-right: 20px;
  font-weight: bold;
  font-size: 1.5rem;
}
</style>
