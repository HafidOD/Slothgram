<template>
  <div id="app">
    <navbar>
    </navbar>
    <Card/>
    <router-view/>
  </div>
</template>

<script>

import Navbar from './components/Navbar';
import LikeButton from './components/LikeButton';
import Card from './components/Card';

export default {
  name: "App",
  components: {
    Navbar,
    LikeButton,
    Card
  },
  method:{
    getData(){
      let that = this;
      fetch(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${procces.env.VUE_APP_TOKEN}`)
      .then(response => response.json())
      .catch(err =>
        this.err = true
      )
      .then(response =>
          that.items = response.data
      ).finally(() => this.loading = false);
          console.log('Succes:', this.items)
    }
  },
  created(){
    this.getData();
  }
}
</script>
