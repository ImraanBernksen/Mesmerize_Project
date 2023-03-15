<template>
  <NavBar/>
  <div class="background">
      <h2>Home</h2>
      <img class="img-fluid" id="logo" src="*">
      <br>
      <br>
      <p class="slogan">Be mesmerized.</p>
      <h2>Preview</h2>
      <div class="container">
        <div class="row" style="gap: 5rem; justify-content: center;" >
        <div class="card" style="width: 16rem;">
            <img src="https://i.postimg.cc/rmqbJ05R/hoodies-2.webp" class="card-img-top mt-2">
            <div class="card-body text-center text-dark">
                <h5 class="card-title">Berserk Anime Hoodie</h5>
                <p class="card-text">R450</p>
            </div>
        </div>
        <div class="card" style="width: 16rem;">
          <img src="https://i.postimg.cc/sDMLwRGm/sweatshirt-3.webp" class="card-img-top mt-2">
          <div class="card-body text-center text-dark">
              <h5 class="card-title">Dragon Ball Anime Sweatshirt</h5>
              <p class="card-text">R282</p>
          </div>
        </div>
        <div class="card" style="width: 16rem;">
        <img src="https://i.postimg.cc/T144ftFn/t-shirt-2.webp" class="card-img-top mt-2">
        <div class="card-body text-center text-dark">
            <h5 class="card-title">Hunter X Hunter Anime T-Shirt</h5>
            <p class="card-text">R211</p>
        </div>
        </div>
        <div class="card" style="width: 16rem;">
          <img src="https://i.postimg.cc/GthWc82n/sweatpants-3.webp" class="card-img-top mt-2">
          <div class="card-body text-center text-dark">
              <h5 class="card-title">Mob Psycho Anime Sweatpants</h5>
              <p class="card-text">R366</p>
          </div>
          </div>
        </div>
        <br>
        <button class="btn btn-outline-light"><a id="links" href="/product">View All</a></button>
      </div>
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
#links {
  text-decoration: none;
}

.shop {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 2rem;
}

img {
    border-radius: 8px;
}
.card { 
    border-radius: 20px;
    box-shadow: 3px -3px 3px 3px white;
}
.card:hover {
    border-radius: 20px;
    box-shadow: 3px -3px 3px 3px black;
}

#logo {
  width: auto;
  height: 60vh;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
}

.slogan {
  color: white;
  text-shadow:  1.5px 1.5px 1.5px black;
  text-align: center;
  font-size: 25px;
  padding-bottom: 70px;
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