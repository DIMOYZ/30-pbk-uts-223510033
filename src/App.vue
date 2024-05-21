<template>
  <div id="app" class="latar">
    <!-- Navbar -->
    <Navbar :brand="brand" :moto="moto" />

    <br>

    <!-- Main Content -->
    <main>
      <header class="header-nav">
        <nav>
          <ul>
            <li @click="showTodos">Todos</li>
            <li @click="showPosts">Posts</li>
            <!-- Added Button -->
            <li class="nav-button"><a href="#">Get Started</a></li>
          </ul>
        </nav>
      </header>
      <div v-if="activeMenu === 'todos'">
        <TodoList
          :todos="todos"
          :filteredTodos="filteredTodos"
          :newTodo="newTodo"
          :filter="filter"
          @add-todo="addTodo"
          @remove-todo="removeTodo"
          @show-active="showActive"
        />
      </div>
      
      <div v-else-if="activeMenu === 'posts'">
        <Posts
          :users="users"
          :posts="posts"
          :selectedUser="selectedUser"
          @update:selectedUser="selectUser"
          :filteredPosts="filteredPosts"
        />
      </div>
    </main>

    <br>
    <footer>
      <p>Copyright &copy;SULTAN FADHIL</p>
    </footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import TodoList from './components/TodoList.vue';
import Posts from './components/Posts.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    TodoList,
    Posts
  },
  data() {
    return {
      brand: 'Selamat Datang di Nootbook DIMOY',
      moto: 'Kesenangan anda adalah kesenangan kami',
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
    addTodo(todoText) {
      if (todoText.trim().length === 0) {
        return;
      }
      this.todos.push({
        text: todoText,
        done: false
      });
      this.newTodo = ''; // Reset input field after adding todo
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    showActive() {
      this.filter = 'active';
    },
    showTodos() {
      this.activeMenu = 'todos';
    },
    showPosts() {
      this.activeMenu = 'posts';
    },
    selectUser(userId) {
      this.selectedUser = userId;
    }
  },
  computed: {
    filteredTodos() {
      switch (this.filter) {
        case 'active':
          return this.todos.filter(todo => !todo.done);
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

<style secop >

nav ul {
  display: flex;
  justify-content: center;
  padding: 0;
}

nav li {
  list-style: none;
  margin: 0 10px;
}

nav li a {
  display: inline-block;
  padding: 10px 20px;
  text-decoration: none;
  color: #333;
  background-color: #f2f2f2;
  border-radius: 5px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

nav li a:hover {
  color: #fff;
  background-color: #3498db;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

nav li a::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  transform-origin: center;
  width: 300%;
  height: 300%;
  background-color: #3498db;
  transition: transform 0.5s;
  border-radius: 50%;
  z-index: 0;
}

nav li a:hover::before {
  transform: translate(-50%, -50%) scale(1);
}

nav li a span {
  position: relative;
  z-index: 1;
}

.header-nav {
  background-color: #4a69bd; /* Warna latar belakang yang elegan */
  color: #ffffff;
  padding: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-nav ul {
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
}

.header-nav li {
  list-style: none;
  margin: 0 15px;
}

.header-nav li a {
  display: inline-block;
  padding: 10px 20px;
  text-decoration: none;
  color: #ffffff;
  background-color: transparent;
  border: 2px solid #ffffff;
  border-radius: 20px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.header-nav li a:hover {
  background-color: #ffffff;
  color: #4a69bd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.header-nav li a::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  transform-origin: center;
  width: 300%;
  height: 300%;
  background-color: #6a89cc;
  transition: transform 0.5s;
  border-radius: 50%;
  z-index: 0;
}

.header-nav li a:hover::before {
  transform: translate(-50%, -50%) scale(1);
}

.header-nav li a span {
  position: relative;
  z-index: 1;
}
</style>