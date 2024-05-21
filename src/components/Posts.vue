<template>
  <div>
    <h2>Postingan</h2>
    <select :value="selectedUser" @change="updateSelectedUser">
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
  props: {
    users: Array,
    posts: Array,
    selectedUser: Number,
    filteredPosts: Array
  },
  methods: {
    updateSelectedUser(event) {
      this.$emit('update:selectedUser', parseInt(event.target.value));
    }
  }
};
</script>

<style scoped>
/* Add your existing styles here */
</style>
