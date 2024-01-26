<script lang="ts">
import { defineComponent } from "vue"
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'WrapAround',
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
  }
})
</script>


<template>
  <Carousel class="primary-carousel" :wrap-around="true">
    
    <Slide :key="slide">
      <div class="carousel__item">
        <img src="../../public/1.jpg" style="width:100%">
        <p>CIAOOOOOOOO</p>
      </div>
    </Slide>
    <Slide :key="slide">
      <div class="carousel__item">
        <img src="../../public/2.jpg" style="width:100%">
        <p>COMEEEEEEEE</p>
      </div>
    </Slide>
    <Slide :key="slide">
      <div class="carousel__item">
        <img src="../../public/3.jpg" style="width:100%">
        <p>VAAAAAAAAAAA</p>
      </div>
    </Slide>

    <template #addons>
      <Pagination />
      <Navigation class="custom-navigation"/>
    </template>

  </Carousel>


  <Carousel class="secondary-carousel" :itemsToShow="3" :wrap-around="true" :transition="500">

    <Slide :key="slide">
      <div class="carousel__item">
        <img src="../../public/1.jpg" style="width:100%">
        <RouterLink to = "/prodotti/tutti/vista/MontatureV"><p>ciaoooooo</p></RouterLink>
      </div>
    </Slide>
    <Slide :key="slide">
      <div class="carousel__item">
        <img src="../../public/2.jpg" style="width:100%">
        <RouterLink to = "/prodotti/tutti/vista/MontatureS"><p>ciaoooooo</p></RouterLink>
      </div>
    </Slide>
    <Slide :key="slide">
      <div class="carousel__item">
        <img src="../../public/3.jpg" style="width:100%">
        <RouterLink to = "/prodotti/tutti/vista/LACC"><p>ciaoooooo</p></RouterLink>
      </div>
    </Slide>

  </Carousel>
</template>