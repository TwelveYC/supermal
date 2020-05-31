<template>
  <div class="tab-control">
      <div v-for="(item, index) in controlTab" class="tab-control-item" :class="{active:currentIndex===index}" @click="tabClick(index)">
          <span>{{item}}</span></div>
  </div>
</template>

<script>
export default {
    name: "TabControl",
    props: {
        controlTab:{
            type: Array,
            default: () =>{
                return [];
            }
        }
    },
    data() {
        return {
            currentIndex: 0
        }
    },
    methods: {
        tabClick(index) {
            this.currentIndex = index;
            this.$emit("tabClink", index);
        }
    }
}
</script>

<style>
.tab-control{
    display: flex;
    font-size: 15px;
    background-color: #fff;
}
.tab-control .tab-control-item{
    flex: 1;
    text-align: center;
    line-height: 40px;
    height: 40px;
    cursor: pointer;
}

.tab-control span{
    padding: 10px 5px 5px;
}
.active span{
    border-bottom: red solid 3px;
    color: var(--color-high-text);
}

</style>