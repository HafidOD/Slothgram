<template>
  <div class="hello">
    <h1 v-html="viewHashtag(msg)"></h1>
    <gallery></gallery>
  </div>
</template>

<script>
import Gallery from './Gallery.vue';
import viewHashtag from '../helpers/viewHashtag.js';

export default {

  name: 'HelloWorld',

  components: {
    Gallery
  },

  props: {
    msg: String,
  },
  methods: {
    viewHashtag
  }
}
</script>