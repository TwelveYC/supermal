<template>
<div>
    <nav-bar>
        <div slot="left" class="back" @click="backClick">
            <img src="~assets/img/common/back.svg" alt="">
        </div>
        <div slot="center" class="title">
            <div v-for="(item, index) in titles" class="title-item" :class="{active:index===currendIndex}" @click="currendIndex=index">
                {{item}}
            </div>
        </div>
    </nav-bar>
</div>
</template>

<script>
import NavBar from 'common/navbar/NavBar';
export default {
    name: "DetailNavBar",
    data() {
        return {
            titles: ["商品" ,"参数","评论","推荐"],
            currendIndex: 0
        }
    },
    components: {
        NavBar
    },
    methods: {
        backClick() {
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
.title{
    display: flex;
    font-size: 13px;
}
.title-item{
    flex: 1;
}

.active{
    color: red;
}
.back{
    margin-top: 7px;
}
</style>