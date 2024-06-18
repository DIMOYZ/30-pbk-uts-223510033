import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => ({
    albums: [],
    photos: []
  }),
  actions: {
    async fetchAlbums() {
      const response = await fetch('https://jsonplaceholder.typicode.com/albums');
      this.albums = await response.json();
    },
    async fetchPhotos() {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      this.photos = await response.json();
    }
  }
});