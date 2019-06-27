<template>
  <div class="cards">
    <Card
      v-for="(item, key) in items"
      :key="key"
      :id="item.id"
      :userinfo="item.user"
      :image="item.images.low_resolution.url"
      :description="(item.caption) ? item.caption.text : ''"
      :likes="item.likes.count"
    />
  </div>
</template>

<script>
import Card from './Card.vue';
const TOKEN = process.env.VUE_APP_TOKEN;

export default {
  name: "Gallery",
  data() {
    return {
      items: []
    }
  },
  components: {
    Card
  },
  methods: {
    getData() {
      fetch(
        `https://api.instagram.com/v1/users/self/media/recent/?access_token=${TOKEN}`
      )
        .then(response => response.json())
        .then(data => {
          this.items = data.data;
          console.log(this.items);
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => (this.loading = false));
      console.log("Succes:", this.items);
    }
  },
  created() {
    this.getData();
  }
};
</script>
