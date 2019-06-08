<template>
    <div class="container">
        <div class="cards">
            <div class="card">
            <img src="https://source.unsplash.com/random/400x400" class="card__header" alt="">
            <article class="card__description">
                <LikeButton title="Likes" v-bind:likeUser="5"/>
                <LikeButton title="Dislikes" v-bind:likeUser="0"/>
                <p>
                    <a href="">#HolaMundo</a>
                </p>
            </article>
        </div>
        </div>
        
    </div>
</template>

<script>
import LikeButton from './LikeButton';

export default {

    name: 'Card',
    components: {
        LikeButton
    },
    data: function(){
        return {
        }
    },
    methods: {

    }
}
</script>
