<template>
   <swiper>
    <swiper-item v-for="(item, index) in banners">
      <a :href="item.link">
        <img :src="item.image" alt="item.title" @load="imgLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'common/swiper'
export default {
    name: "HomeSwiper",
    props: {
        banners:{
            type: Array,
            default: () =>{
                return [];
            }
        }
    },
    components: {
        Swiper,
        SwiperItem
    },
    methods: {
      imgLoad() {
        this.$emit("swiperImgLoad")
      }
    }
}
</script>

<style>

</style>