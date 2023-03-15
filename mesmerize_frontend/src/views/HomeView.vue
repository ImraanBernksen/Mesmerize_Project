<template>
  <NavBar/>
  <div class="background">
      <h2>Home</h2>
      <img class="img-fluid" src="https://i.postimg.cc/y6DLw6zr/black-logo-removebg-preview.png">
      <br>
      <br>
      <p class="slogan">Be mesmerized.</p>
      <h2>Preview</h2>
      
      <FooterComponent/>
    </div>
</template>
<script>
import NavBar from '../components/NavBar.vue';
import FooterComponent from '../components/FooterComponent.vue'
export default {
  name: 'HomeView',
  components: {
  NavBar,
  FooterComponent
}
}
</script>

<style scoped>
img {
  width: auto;
  height: 60vh;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
}

p {
  color: white;
  text-shadow:  1.5px 1.5px 1.5px black;
  text-align: center;
  font-size: 25px;
  padding-bottom: 70px;
}
.slogan {
  animation-duration: 2.5s;
  animation-fill-mode: both;
  animation-name: sloganColor;
  animation-iteration-count: infinite;
}
@keyframes sloganColor {
  0% {
    color: white;
  }
  50% {
    color: black;
  }
  100% {
    color: white;
  }
}
</style>