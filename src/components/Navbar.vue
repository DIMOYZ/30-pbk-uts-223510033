<template>
  <nav class="navbar">
    <div class="logo">
      <img src="../assets/3.jpg" alt="Logo" />
    </div>
    <div class="container">
      <span class="navbar-brand"><u>{{ brand }}</u></span>
      <span class="navbar-moto"><u>{{ moto }}</u></span>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    brand: String,
    moto: String
  }
};
</script>

<style scoped>
.navbar {
  background-color: yellow;
  color: black;
  padding: 10px 20px;
  text-align: center;
  height: 100px;
}

.logo {
  float: left;
  margin-right: 10px;
}

.logo img {
  width: 30%;
  height: auto;
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
