<template>
  <router-link :to="`/p/${id}`">
      <div class="card">
    <!-- CARD USER PROFILE -->
    <UserNameInfo 
      :photo="userinfo.profile_picture" 
      :username="userinfo.username"
    />
    <div class="card__body">
      <div class="card__image-with-likes" :data-count-likes="likes">
        <img :src="image" class="card__header" alt>
      </div>
      <article class="card__description">
        <p 
          v-html="viewHashtag(description)"
          class="card__description-text">
        </p>
      </article>
    </div>
  </div>
  </router-link>
</template>

<script>
import viewHashtag from '../helpers/viewHashtag';
import UserNameInfo from './UserNameInfo';

export default {
  name: "Card",
  components:{
    UserNameInfo
  },
  props: {
    id: String,
    userinfo: Object,
    image: String,
    description: {
      type: String,
      default: "asdfgh"
    },
    likes: Number
  },
  data: function() {
    return {};
  },
  methods: {
    viewHashtag
  }
};
</script>
