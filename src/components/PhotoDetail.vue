<template>
    <q-page>
      <q-card>
        <q-card-section>
          <div class="text-h6">{{ photo.title }}</div>
        </q-card-section>
        <q-card-section>
          <q-img :src="photo.url" :alt="photo.title" />
        </q-card-section>
      </q-card>
    </q-page>
  </template>
  
  <script>
  export default {
    name: 'PhotoDetail',
    props: ['id'],
    data() {
      return {
        photo: {}
      };
    },
    methods: {
      fetchPhoto() {
        fetch(`https://jsonplaceholder.typicode.com/photos/${this.id}`)
          .then(response => response.json())
          .then(data => {
            this.photo = data;
          });
      }
    },
    mounted() {
      this.fetchPhoto();
    }
  };
  </script>
  