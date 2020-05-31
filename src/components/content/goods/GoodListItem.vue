<template>
  <div class="good-list-item" @click="itemClick">
      <img :src="goodsItem.show.img" alt="" class="item-img" @load="imgLoad">  
      <div class="good-info">
          <p class="item-text">{{goodsItem.title}}</p>
          <span class="item-price">￥{{goodsItem.price}}</span>
          <img src="~assets/img/common/collect.svg" alt="">
          <span class="collect">{{goodsItem.cfav}}</span>
      </div>  
  </div>
</template>

<script>
export default {
    name: "GoodListItem",
    props: {
        goodsItem :{
            type: Object,
            default() {
                return {};
            }
        }
    },
    methods: {
        imgLoad() {
            this.$bus.$emit("imgItemLoad");
        },
        itemClick() {
            console.log("跳转");
            this.$router.push({
                path: "/detail/" + this.goodsItem.iid,
            });
        }
    }

}
</script>

<style>
.good-list-item{
    text-align: center;
    width: 46%;
}
.good-list-item img{
    width: 100%;
    height: 80%;
}
.good-list-item .good-info p{
    
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.good-list-item .good-info .item-price{
    color: var(--color-high-text);
}
.good-list-item .good-info .collect{
    position: relative;
}

.good-list-item .good-info img{
    width: 14px;
    height: 14px;
}


</style>