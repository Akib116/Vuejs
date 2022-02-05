<template>
  <div class="details">
  </div>
  <div>
    <Postdetails></Postdetails>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Postdetails from '@/components/postdetails.vue';

@Options({
  components: {
    Postdetails,
  },
})
export default class Post extends Vue {}
</script>
