<template>
<div class="container">
    <button class="botton" @click="like"><i class="far fa-thumbs-up"></i>{{title}} {{likeUser}}</button>
    </div>
</template>

<script>

export default {
    name: 'LikeButton',
    props:{
        title: String,
        likeUser: Number,
    },

    data: function(){
        return {
            count: 0,
            userFlag: false
        }
    },

    methods: {
        like: function () {
            if(!this.userFlag){
                this.userFlag = true;
                this.likeUser ++;
            }
            else{
                this.userFlag = false;
                this.likeUser --;
            }
        }
    }
}
</script>

