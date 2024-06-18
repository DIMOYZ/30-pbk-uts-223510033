<template>
  <q-header>
    <q-toolbar>
      <q-toolbar-title>{{ brand }}</q-toolbar-title>
      <q-btn flat @click="$router.push('/todos')">Todos</q-btn>
      <q-btn flat @click="$router.push('/posts')">Posts</q-btn>
      <q-btn flat @click="$router.push('/albums')">Albums</q-btn>
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    brand: String,
    moto: String
  }
}
</script>
