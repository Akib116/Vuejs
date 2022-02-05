<template>
  <Previouspage></Previouspage>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Previouspage from '@/components/Previouspage.vue';

@Options({
  components: {
    Previouspage,
  },
})
export default class Previous extends Vue {}
</script>
