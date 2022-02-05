<template>
  <Puttoken></Puttoken>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Puttoken from '@/components/Puttoken.vue';

@Options({
  components: {
    Puttoken,
  },
})
export default class Get extends Vue {}
</script>
