<template>
  <div>
    <h2>Photos</h2>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-for="photo in filteredPhotos" :key="photo.id">
        <img :src="photo.thumbnailUrl" alt="Photo" @click="showFullImage(photo.url)" />
      </div>
      <div v-if="showImageDialog">
        <img :src="fullImageUrl" alt="Full Image" @click="closeFullImage" />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'Photos',
  setup() {
    const route = useRoute();
    const albumId = route.params.id;
    const loading = ref(true);
    const photos = ref([]);
    const showImageDialog = ref(false);
    const fullImageUrl = ref(null);

    onMounted(async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        photos.value = await response.json();
      } catch (error) {
        console.error('Error fetching photos:', error);
      } finally {
        loading.value = false;
      }
    });

    const filteredPhotos = computed(() => {
      return photos.value.filter(photo => photo.albumId === parseInt(albumId));
    });

    const showFullImage = (url) => {
      fullImageUrl.value = url;
      showImageDialog.value = true;
    };

    const closeFullImage = () => {
      showImageDialog.value = false;
      fullImageUrl.value = null;
    };

    return {
      loading,
      filteredPhotos,
      showFullImage,
      closeFullImage,
      showImageDialog,
      fullImageUrl
    };
  }
};
</script>