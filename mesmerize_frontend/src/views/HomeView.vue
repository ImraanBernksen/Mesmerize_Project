<template>
  <NavBar/>
  <div class="background">
    <div class="homeImg img-fluid">
      <h2>Home</h2>
      <br>
      <p class="title">M E S M E R I Z E</p>
      <br>
      <p class="slogan">Be mesmerized.</p>
    </div>
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
        <div class="card">
          <img src="https://i.postimg.cc/sDMLwRGm/sweatshirt-3.webp" class="card-img-top mt-2">
          <div class="card-body text-center text-dark">
              <h5 class="card-title">Dragon Ball Anime Sweatshirt</h5>
              <p class="card-text">R282</p>
          </div>
        </div>
        <div class="card">
        <img src="https://i.postimg.cc/T144ftFn/t-shirt-2.webp" class="card-img-top mt-2">
        <div class="card-body text-center text-dark">
            <h5 class="card-title">Hunter X Hunter Anime T-Shirt</h5>
            <p class="card-text">R211</p>
        </div>
        </div>
        <div class="card">
          <img src="https://i.postimg.cc/GthWc82n/sweatpants-3.webp" class="card-img-top mt-2">
          <div class="card-body text-center text-dark">
              <h5 class="card-title">Mob Psycho Anime Sweatpants</h5>
              <p class="card-text">R366</p>
          </div>
          </div>
        </div>
        <br>
      </div>
      <button class="btn btn-outline-light"><a id="links" href="/product">View All</a></button>
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
.container {
  padding: 20px;
}

.homeImg {
  background-image: url(https://i.postimg.cc/Hk0R0hz7/don-sosa-9-Mn-RTW5-KBM-unsplash.jpg);
  height: 100vh
}

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
  width: 16rem;
  border-radius: 20px;
  box-shadow: 3px -3px 3px 3px white;
}
.card:hover {
  border-radius: 20px;
  box-shadow: 3px -3px 3px 3px black;
}

.title {
  color: white;
  text-shadow:  1.5px 1.5px 1.5px black;
  text-align: center;
  margin-top: 160px;
  font-size: 100px;
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

@media screen and (max-width: 300px) {
  .title{
    font-size: 45px !important;
  }
};
</style>