<template>
  <q-page>
    <q-card>
      <q-card-section>
        <div class="text-h6">Albums</div>
      </q-card-section>
      <q-card-section>
        <q-list>
          <q-item v-for="album in albums" :key="album.id" clickable @click="viewAlbum(album)">
            <q-item-section>
              <q-item-label>{{ album.title }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'Albums',
  data() {
    return {
      albums: []
    };
  },
  methods: {
    fetchAlbums() {
      fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(data => {
          this.albums = data;
        });
    },
    viewAlbum(album) {
      this.$router.push({ path: `/albums/${album.id}` });
    }
  },
  mounted() {
    this.fetchAlbums();
  }
};
</script>
