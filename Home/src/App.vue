<template>
  <div id="app">

    <router-view/>
    <PhotoGallery/>
  </div>
</template>

<script>

import PhotoGallery from './components/PhotoGallery.vue'

export default {
  name: 'App',
  components: {
    PhotoGallery
  }
}

</script>
<script>
import file from './components/file.json';

export default {
  data() {
    return {
      courses: file,
    };
  },
};
</script>

<style>

</style>
