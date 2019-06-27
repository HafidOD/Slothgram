<template>
  <div class="about">
    <div class="about-image__photo">
      <img :src="image" alt="">
      
    </div>
    <div class="about-image__description">
        <div class="about-image__profile">
          <Username 
            :photo="userinfo.profile_picture"
            :username="userinfo.username"
          />
        </div>
        <p v-html="viewHashtag(description)">
        </p>
      </div>
  </div>
</template>

<script>
import Username from '../components/UserNameInfo';
import viewHashtag from '../helpers/viewHashtag';

const TOKEN = process.env.VUE_APP_TOKEN;

export default {
  name: 'About',
  components:{
    Username
  },
  data () {
    return{
      image: '',
      description: '',
      userinfo: {}
    }
  },
  methods: {
    viewHashtag,

    getInfoImage() {
      const ID = this.$route.params.id;
      const URL = `https://api.instagram.com/v1/media/${ID}/?access_token=${TOKEN}`;

      fetch(URL)
        .then(response => response.json())
        .then(data =>{
          console.log(data);
          this.image = data.data.images.standard_resolution.url;
          this.description = (data.data.caption) ? data.data.caption.text : 'No description';
          this.userinfo = data.data.user;
      })
      .catch(err => console.log(err))
      .finally(r =>{
        console.log("finally");
      });
    }
  },
  created() {
    this.getInfoImage();
  }
}
</script>
