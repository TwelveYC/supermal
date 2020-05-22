<template>
<div id="home">
  <nav-bar class="home-nav">
    <div slot="left">
    </div>
    <div slot="center">
      购物街
    </div>
    <div slot="right">
    </div>
  </nav-bar>
  <home-swiper :banners="banners"></home-swiper>
  <home-recommend-view :recommends="recommends"></home-recommend-view>
</div>

</template>

<script>
import NavBar from 'common/navbar/NavBar';
import {getHomeMulitData} from 'network/home';

import HomeSwiper from './childcomponents/HomeSwiper';

import HomeRecommendView from './childcomponents/HomeRecommendView'

export default {
    name: "Home",
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommendView
    },
    created() {
      getHomeMulitData().then( res => {
        // console.log(res);
        // 这个this是组件对象
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
        console.log(res);
      }).catch( err => {
        console.log(err);
      })
    }
}
</script>

<style>
.home-nav{
  background-color: var(--color-tint);
  color: white;
}
</style>