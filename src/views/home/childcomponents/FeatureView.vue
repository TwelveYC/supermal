<template>
  <div class="feature">
      <a href="https://act.mogujie.com/zzlx67">
          <img src="~assets/img/home/recommend_bg.jpg" alt="" class="feature-img">
      </a>
  </div>
</template>

<script>
export default {
    name: "FeatureView",
    props: {
        linkto: {
            type: String,
            default: ""
        }
    }
}
</script>

<style>
.feature-img{
    width: 100%;
}
</style>