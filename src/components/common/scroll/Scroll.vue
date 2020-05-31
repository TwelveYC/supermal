<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
            <slot>
            </slot>
      </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
    name: "Scroll",
    props: {
        probeType: {
            type: Number,
            default: 1
        },
        pullUpLoad: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            bscroll: null
        }
    },
    mounted() {
        this.bscroll = new BScroll(this.$refs.wrapper, {
            click: true,
            probeType: this.probeType,
            pullUpLoad: this.pullUpLoad,
        });
        this.bscroll.on("scroll", (position) => {
            this.$emit("backTopIsShow",position);
        });
        if(this.pullUpLoad){
            this.bscroll.on("pullingUp", () => {
                this.$emit("pullUpLoad");
                this.bscroll.finishPullUp();
            });
        }
    },
    methods: {
        backTop(x,y,time) {
            this.bscroll && this.bscroll.scrollTo(x, y, time);
        },
        refresh() {
            this.bscroll && this.bscroll.refresh();
        }
    }
}
</script>

<style scoped>

</style>