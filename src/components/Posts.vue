<template>
  <div>
    <h2>Postingan</h2>
    <select v-model="selectedUser" @change="fetchPosts">
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
</template>

<script>
export default {
  name: 'Posts',
  data() {
    return {
      users: [],
      posts: [],
      selectedUser: null
    };
  },
  computed: {
    filteredPosts() {
      if (!this.selectedUser) return [];
      return this.posts.filter(post => post.userId === this.selectedUser);
    }
  },
  methods: {
    fetchUsers() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
          this.users = data;
        });
    },
    fetchPosts() {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
          this.posts = data;
        });
    },
    updateSelectedUser(event) {
      this.selectedUser = parseInt(event.target.value);
    }
  },
  mounted() {
    this.fetchUsers();
    this.fetchPosts();
  }
};
</script>

<style scoped>
/* Add your existing styles here */
</style>
