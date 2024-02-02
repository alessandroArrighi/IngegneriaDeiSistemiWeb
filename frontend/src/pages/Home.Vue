<script lang="ts">
import { defineComponent } from "vue"
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'WrapAround',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      slide: 0,
      itemsToShow: 2.3,
    }
  },
  methods: {
    updateItemsToShow() {
      this.itemsToShow = window.innerWidth > 768 ? 2.3 : 1.5;
    },
  },
  mounted() {
    // Initial setup
    this.updateItemsToShow();

    // Listen for window resize events
    window.addEventListener('resize', this.updateItemsToShow);
  },
  beforeUnmount() {
    // Remove the resize event listener to avoid memory leaks
    window.removeEventListener('resize', this.updateItemsToShow);
  },
})
</script>


<template>
  <Carousel class="primary-carousel" :wrap-around="true">
    
    <Slide :key="slide">
      <div class="carousel__item">
        <img src="../../public/1.jpg">
        <p>CIAOOOOOOOO</p>
      </div>
    </Slide>
    <Slide :key="slide">
      <div class="carousel__item">
        <img src="../../public/2.jpg">
        <p>COMEEEEEEEE</p>
      </div>
    </Slide>
    <Slide :key="slide">
      <div class="carousel__item">
        <img src="../../public/3.jpg">
        <p>VAAAAAAAAAAA</p>
      </div>
    </Slide>

    <template #addons>
      <Navigation class="custom-navigation"/>
    </template>

  </Carousel>
  

  <h2>Le Nostre Categorie</h2>


  <Carousel class="secondary-carousel" :itemsToShow="itemsToShow" :wrap-around="true" :transition="500">

    <Slide :key="slide">
      <div class="carousel__item">
        <img src="../../public/1.jpg">
        <RouterLink to = "/prodotti/tutti/vista/MontatureV">Occhiali da Vista</RouterLink>
      </div>
    </Slide>
    <Slide :key="slide">
      <div class="carousel__item">
        <img src="../../public/2.jpg">
        <RouterLink to = "/prodotti/tutti/vista/MontatureS">Occhiali da Sole</RouterLink>
      </div>
    </Slide>
    <Slide :key="slide">
      <div class="carousel__item">
        <img src="../../public/3.jpg">
        <RouterLink to = "/prodotti/tutti/vista/LACC">Lenti a Contatto</RouterLink>
      </div>
    </Slide>

  </Carousel>
</template>