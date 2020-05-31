<template>
  <div id="detal">
      <detail-nav-bar></detail-nav-bar>
      <detail-swiper :topImages="topImages"></detail-swiper>
  </div>
</template>

<script>
import NavBar from 'common/navbar/NavBar';
import DetailNavBar from './childComponents/DetailNavBar';

import DetailSwiper from './childComponents/DetailSwiper';

import {getDetail} from 'network/detail'
export default {
    name: "Detail",
    data() {
        return {
            iid: null,
            topImages: [],
        }
    },
    components: {
        NavBar,
        DetailNavBar,
        DetailSwiper
    },
    created() {
        this.iid = this.$route.params.iid;
        getDetail(this.iid).then(res => {
            console.log(res);
            this.topImages = res.data.result.itemInfo.topImages;
            console.log(this.topImages);
        })
    }
}
</script>

<style scoped>

</style>
