<template>
  <div class="latar">
    <nav class="navbar">
      <div class="logo">
        <img src="../src/assets/3.jpg" alt="">
      </div>
    <div class="container">
      <span class="navbar-brand"><u>Selamat Datang di Nootbook DIMOY</u></span>
      <span class="navbar-moto"><u>Kesenangan anda adalah kesenangan kami</u>
      </span>
      
    </div>
  </nav>
  <br>
  
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
        <li v-for="(todo, index) in todos" :key="index">
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

  <br>
  <footer>
    <p>Copyright &copy;SULTAN FADHIL</p>
  </footer>
</div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: '',
      todos: [],
      filter: 'all',
      backgroundStyle: {
        background: 'linear-gradient(to right, white, yellow, green)'
      }
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
    showUncompleted() {
      this.filter = 'uncompleted';
    },
  },
  computed: {
    filteredTodos() {
      switch (this.filter) {
        case 'active':
          return this.todos.filter(todo => !todo.done);
        case 'completed':
          return this.todos.filter(todo => todo.done);
        case 'uncompleted':
          return this.todos.filter(todo => !todo.done);
        default:
          return this.todos;
      }
    }
  }
}
</script>



<style>
.geser{
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
.latar{
  background: url('assets/2.jpeg');
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
  font-size: 2rem; /* Atau ukuran yang Anda inginkan */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

}

.todo-list form {
    display: flex;
    margin-bottom: 20px
    

    
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

.todo-list h2{
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

.tengah{
  margin-left: 20%;

}

footer {
  text-align: center;
  background-color: yellow; /* Warna latar belakang kuning */
  padding: 20px 0; /* Padding atas dan bawah */
  font-size: 1.2rem; /* Ukuran font */
  color: black; /* Warna teks */
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1); /* Bayangan untuk efek kedalaman */
}

footer a {
  color: black; /* Warna tautan */
  text-decoration: none; /* Menghilangkan garis bawah tautan */
  margin: 0 10px; /* Jarak antar tautan */
}

footer a:hover {
  text-decoration: underline; /* Menambahkan garis bawah saat di-hover */
}

/* Tambahkan kelas ini jika Anda memiliki ikon sosial media di footer */
footer .social-media-icon {
  padding: 0 5px; /* Jarak antar ikon */
  font-size: 1.5rem; /* Ukuran ikon */
}

.todo-list ul li span {
  font-size: 1.2rem; /* Atau ukuran yang Anda inginkan */
  gap: 20px;
  color: aliceblue;
}

/* Menambahkan padding untuk memberikan ruang lebih */
.todo-list ul li {
  padding: 5px 0; /* Atur sesuai kebutuhan */
}

/* Menyesuaikan ukuran button untuk konsistensi */
.todo-list ul li button {
  padding: 10px 15px; /* Atur sesuai kebutuhan */
  font-size: 1rem; /* Atur sesuai kebutuhan */
}
.navbar {
  background-color: yellow; /* Mengubah warna latar belakang menjadi kuning */
  color: black; /* Mengubah warna teks menjadi hitam untuk kontras */
  padding: 10px 20px; /* Padding navbar */
  text-align: center; /* Posisi teks */
  height: 100px;
}

.container {
  max-width: 1500px; /* Lebar maksimum container */
  margin: 0 auto; /* Pusatkan container */
  display: flex;
  flex-direction: column;
  background: url('assets/5.jpg')  ;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  box-shadow: #23a6d5;
  
}

.navbar-brand {
  padding: 10px;
  font-weight: bold; /* Membuat teks lebih tebal */
  font-size: 1.5rem; /* Ukuran teks */
}
.navbar-moto {
  padding: 10px;
  margin-right:  20px;
  font-weight: bold; /* Membuat teks lebih tebal */
  font-size: 1.5rem; /* Ukuran teks */
}
</style>
