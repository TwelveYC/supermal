<template>
<div class="recommends">
    <div v-for="item in recommends" class="recommends-item">
        <a :href="item.link">
            <img :src="item.image" alt="">
            <div>{{item.title}}</div>
        </a>
    </div>
</div>
  
</template>

<script>
export default {
    name: 'HomeRecommendView',
    props: {
        recommends: {
            type: Array,
            default: () => {
                return [];
            }
        }
    }
}
</script>

<style>
.recommends{
    display: flex;
    width: 100%;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
}
.recommends-item{
    flex: 1;
    text-align: center;
    font-size: 12px;
    
}

.recommends-item img{
    width: 85%;
    margin: 0 auto;
    margin-bottom: 10px;
}


</style>