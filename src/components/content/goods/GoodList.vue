<template>
  <div class="goods">
      <good-list-item class="good-item" v-for="(item,index) in goods" :goodsItem="item" :key="index"></good-list-item>
  </div>
</template>

<script>
import GoodListItem from './GoodListItem'
export default {
    name: "GoodList",
    props: {
        goods: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    components: {
        GoodListItem
    }
}
</script>


<style scoped>
.goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
</style>