<template>
  <div class="home">
    {{VUE_APP_ENV_VARIABLE}}
<HelloWorld></HelloWorld>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
  data() {
    return {
      VUE_APP_ENV_VARIABLE:process.env.VUE_APP_BASE_URL
    }
  }



})
export default class Home extends Vue {
}

</script>
