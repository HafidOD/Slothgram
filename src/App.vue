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
  }
}
</script>
