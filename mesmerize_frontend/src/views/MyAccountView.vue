<template>
    <NavBar/>
    <div class="background">
        <h2>My Account</h2>
        <img class="img-fluid" :src="$store.state.user?.userImg">
        <div class="profile">
        <h4>Welcome, {{ $store.state.user?.firstName }} {{ $store.state.user?.lastName }}</h4>
        <h4>{{ $store.state.user?.userEmail }}</h4>
        <h4>{{ $store.state.user?.userRole }}</h4>
        <h4>{{ $store.state.user?.joinDate }}</h4>
      </div>
        <FooterComponent/>
    </div>
</template>
<script>
import NavBar from '../components/NavBar.vue';
import FooterComponent from '../components/FooterComponent.vue'
export default {
  components: {
  NavBar,
  FooterComponent
}
}
</script>
<style scoped>
img {
  width: 50vh;
  height: auto;
  border-radius: 30px;
}

.profile {
  padding-top: 30px;
}
</style>