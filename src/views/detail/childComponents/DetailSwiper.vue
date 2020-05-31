<template>
  <div>
      <swiper class="swapper-class">
          <swiper-item v-for="(item,index) in topImages" :key="index" class="swapper-item">
              <img :src="item" alt="">
          </swiper-item>
      </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'common/swiper'
export default {
    name:"DetailSwiper",
    props: {
        topImages: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    components: {
        Swiper,
        SwiperItem
    }
}
</script>

<style scoped>
.swapper-class{
    height: 300px;
    overflow: hidden;
}
</style>
