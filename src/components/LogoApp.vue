<template>
   <router-link to="/">
       <h1 class="main-logo">
       
       <i class="fab fa-instagram"></i> 
       <span :class="{'is-hidden': onscroll >= 50}"> Slothgram</span>
   </h1>
   </router-link>
</template>

<script>
export default {
    name: 'LogoApp',
    props:{
        onscroll: Number
    }
}
</script>

