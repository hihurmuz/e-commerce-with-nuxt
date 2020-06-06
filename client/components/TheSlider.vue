<template>
  <div class="sliderContainer">
      <div class="sliderContent">
        <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
        >
        

        <!-- Slides with image only -->
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>
    
        
        </b-carousel>

        <p class="mt-4">
        Slide #: {{ slide }}<br>
        Sliding: {{ sliding }}
        </p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style>
.sliderContainer{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
}
.sliderContent{
    width: 80%;
    padding-left: 20px;
    padding-right: 20px;
}
</style>