<template>
    <div class="card__user">
      <img class="card__user-picture" :src="photo" :alt="username">
      <p class="card__user-name">{{ username }}</p>
    </div>
</template>

<script>


export default {
    name: 'UserNameInfo',
    props:{
        username: String,
        photo: String
    }
}
</script>
