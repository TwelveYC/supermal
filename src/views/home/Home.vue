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
  <tab-control :controlTab="titles" class="tab-control" @tabClink="tabClink" ref="tabControl1"
  v-show="isTabFixed"></tab-control>
  <scroll class="content" ref="scoll" :probe-type="3" @backTopIsShow="backTopIsShow" :pull-up-load="true" @pullUpLoad="pullUpLoad">
  <home-swiper :banners="banners" class="home-swiper" @swiperImgLoad.once="swiperImgLoad"></home-swiper>
  <home-recommend-view :recommends="recommends"></home-recommend-view>
  <feature-view></feature-view>
  <tab-control :controlTab="titles" class="tab-control" @tabClink="tabClink" ref="tabControl2"
  ></tab-control>
  <good-list :goods="currentGood"></good-list>
  </scroll>
  <back-top @click.native="backTopClick" v-show="isBackUpShow"></back-top>
  <!-- 监听组件的的click时间要加上native的修饰符，不需要div包裹 原生事件，不仅仅是click-->
</div>
</template>

<script>


import HomeSwiper from './childcomponents/HomeSwiper';
import FeatureView from './childcomponents/FeatureView';

import TabControl from 'content/tabControl/TabControl';
import GoodList from 'content/goods/GoodList';
import GoodListItem from 'content/goods/GoodListItem';
import BackTop from 'content/backTop/BackTop';

import HomeRecommendView from './childcomponents/HomeRecommendView';

import {getHomeMulitData, getHomeGoods} from 'network/home';

import NavBar from 'common/navbar/NavBar';
import Scroll from 'common/scroll/Scroll';

import {debounce} from 'common/utils/utils.js'


export default {
    name: "Home",
    data() {
      return {
        banners: [],
        recommends: [],
        titles: ["流行", "新款", "精选"],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        },
        currentType: 'pop',
        isBackUpShow: true,
        tabOffSet: 0,
        isTabFixed: false
      }
    },
    components: {
      HomeSwiper,
      HomeRecommendView,
      FeatureView,
      TabControl,
      NavBar,
      GoodList,
      GoodListItem,
      Scroll,
      BackTop,
    },
    created() {
      this.getHomeMulitData();
      this.getHomeGoods("pop");
      this.getHomeGoods("new");
      this.getHomeGoods("sell");
      
    },
    computed: {
      currentGood() {
        return this.goods[this.currentType].list;
      }
    },
    mounted() {
      const refresh = debounce(this.$refs.scoll.refresh, 500);
      this.$bus.$on("imgItemLoad", () => {
        refresh();
      });
    },
    methods: {
      // 事件监听
      tabClink(index) {
        switch(index){
          case 0:
            this.currentType = "pop";
            break;
          case 1:
            this.currentType = "new";
            break;
          case 2:
            this.currentType = "sell";
            break;
        }
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
      },
      backTopClick() {
        this.$refs.scoll.backTop(0 ,0, 500);
      },
      backTopIsShow(position) {
        this.isBackUpShow = position.y<=-1000;
        this.isTabFixed = (-position.y) > this.tabOffSet;
      },
      pullUpLoad() {
        // console.log("hereh");
        this.getHomeGoods(this.currentType);
      },
      swiperImgLoad() {
        this.tabOffSet = this.$refs.tabControl2.$el.offsetTop;
      },
      //网络请求
      getHomeMulitData() {
        getHomeMulitData().then( res => {
          // console.log(res);
          // 这个this是组件对象
          this.banners = res.data.data.banner.list;
          this.recommends = res.data.data.recommend.list;
          // console.log(res);
        }).catch( err => {
          console.log(err);
        });
      },
      getHomeGoods(type) {
          const page = this.goods[type].page + 1;
          getHomeGoods(type, page).then(res =>{
          this.goods[type].list.push(...res.data.data.list);
          this.goods[type].page += 1;
        });
      }
    },
    activated() {
      if(this.save_y===undefined) this.save_y = 0;
      this.$refs.scoll.bscroll.scrollTo(0,this.save_y);
      this.$refs.scoll.bscroll.refresh();
      
    },
    deactivated() {
      this.save_y =  this.$refs.scoll.bscroll?this.$refs.scoll.bscroll.y:0;
    }
}
</script>

<style scoped>
#home{
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
  /* vh 表示视口高度 viewport height */
}
.home-nav{
  background-color: var(--color-tint);
  color: white;

  /* position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 9; */
}
.tab-control {
  /* position: sticky;
  top: 44px; */
  /* 粘性定位，会根据top数值会根据这个判定它是fix还是 */
}
/* .content{
  margin-top: 44px;
  height: calc(100% - 93px);
  overflow: hidden;
} */
.content{
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tab-control{
  position: relative;
  z-index: 9;
}

</style>
