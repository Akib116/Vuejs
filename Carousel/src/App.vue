<template>

  <div class="app">
    <carousel>
      <carousel-slide v-for="(slide, index) in slides" :key="slide" :index="index">
        <img :src="slide"/> 
      </carousel-slide>
  
    </carousel>
    
  </div>
</template>

<script>
import Carousel from './components/Carousel';
import CarouselSlider from './components/CarouselSlider';

export default {
  data(){
    return{
      slides: [
          'https://picsum.photos/id/238/400/200',
          'https://picsum.photos/id/236/400/200',
          'https://picsum.photos/id/235/400/200',
          'https://picsum.photos/id/234/400/200',
          'https://picsum.photos/id/233/400/200',
          'https://picsum.photos/id/232/400/200',
          'https://picsum.photos/id/231/400/200',
          'https://picsum.photos/id/230/400/200',
          'https://picsum.photos/id/229/400/200',
          'https://picsum.photos/id/228/400/200',
          'https://picsum.photos/id/227/400/200',
          'https://picsum.photos/id/250/400/200',
          'https://picsum.photos/id/251/400/200',
          'https://picsum.photos/id/255/400/200',
          'https://picsum.photos/id/256/400/200',
          'https://picsum.photos/id/253/400/200',
          'https://picsum.photos/id/254/400/200',
          'https://picsum.photos/id/252/400/200',
          
          
      ],
      visibleSlide:0,
    }
  },
  components: {
    Carousel,
    CarouselSlider,

  }
}
</script>

<style>
   .app {
  display: flex;
  justify-content: center;
}
*{  
  margin: right;
  padding: 6px 6px;
  
}
</style>
