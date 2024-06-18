<template>
    <q-page>
      <q-card>
        <q-card-section>
          <div class="text-h6">Album {{ albumId }}</div>
        </q-card-section>
        <q-card-section>
          <q-list>
            <q-item v-for="photo in photos" :key="photo.id" clickable @click="viewPhoto(photo)">
              <q-item-section>
                <q-img :src="photo.thumbnailUrl" :alt="photo.title" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ photo.title }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </q-page>
  </template>
  
  <script>
  export default {
    name: 'AlbumDetail',
    props: ['id'],
    data() {
      return {
        albumId: this.id,
        photos: []
      };
    },
    methods: {
      fetchPhotos() {
        fetch(`https://jsonplaceholder.typicode.com/albums/${this.albumId}/photos`)
          .then(response => response.json())
          .then(data => {
            this.photos = data;
          });
      },
      viewPhoto(photo) {
        this.$router.push({ path: `/photo/${photo.id}` });
      }
    },
    mounted() {
      this.fetchPhotos();
    }
  };
  </script>
  