<template>
<div>
    <h2>分类</h2>
</div>
</template>

<script>
import BScroll from 'better-scroll';

export default {
    name: "Category",
    data(){
      return {
        bScroll: null
      }
    },
    created() {
      
    },
    mounted() {
      // this.bScroll =  new BScroll(document.querySelector(".wrapper"),{
      //   probeType: 2,
      //   pullUpLoad: true
      // });
      // this.bScroll.on("scroll", (position => {
      //   // console.log(position);
      // }));
      // this.bScroll.on("pullingUp", () => {
      //   console.log("上拉加载更多");
        
      // });
    },
    methods: {
      
    }
}
</script>

<style scoped>

</style>