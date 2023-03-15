<template>
    <NavBar/>
    <div class="background">
        <h2>My Account</h2>
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
<style>
    
</style>