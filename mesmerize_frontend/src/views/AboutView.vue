<template>
    <NavBar/>
    <div class="background">
      <!-- <div style="background-image: url(https://i.postimg.cc/vZDVFc2Y/no-revisions-k-WVIm-L5-Qx-JI-unsplash.jpg); height: 100vh;"> -->
        <h2>About</h2>
        <p style="font-size: 25px; padding: 20px;">I am thrilled to introduce you to Mesmerize, a new clothing brand that aims to provide unique 
          and high-quality clothing options to fashion-conscious consumers. Our brand is built on the 
          principles of creativity, originality, and quality, and we are confident that we have the potential to
          become a major player in the fashion industry.<br><br>
          Our initial product line consists of creatively designed clothing pieces made with high-quality 
          materials that are durable and long-lasting. Our brand would also gain a strong reputation in the 
          anime community, and we are excited to expand our reach by collaborating with like-minded 
          businesses. We believe that our products will appeal to a wide range of consumers who 
          appreciate creativity and quality, and we are excited to introduce them to the world.<br><br>
          Our marketing strategy includes creating a strong social media presence, participating in 
          fashion shows and events, and collaborating with influencers and other brands. We could offer 
          exclusive discounts and promotions to our respective customers. Launching an e-commerce 
          website to make shopping for Mesmerize clothing convenient for customers worldwide.</p>
          <div class="theFounder">
            <div class="card text-dark" style="width: 18rem;">
          <img src="https://i.postimg.cc/kXZsqSPz/t0.jpg"  class="card-img-top mx-auto mt-5 image" style="width: 15rem;">
          <div class="card-body text-center">
            <h5 class="card-title">Imraan Bernksen</h5>
            <p class="card-text">Founder</p>
            <a href="https://www.linkedin.com/in/imraanbernksen/"><i class="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      <!-- </div> -->
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
/*p {
  text-shadow:  1.5px 1.5px 1.5px black;
} */

.theFounder {
  display: flex;
  flex-wrap: wrap;
  gap: 10rem;
  justify-content: center;
  margin-top: 85px;
  margin-bottom: 60px;
}
.card {
  box-shadow: 5px 5px 6px white;
}
.card:hover {
  box-shadow: 5px 5px 6px black;
}
img {
  border-radius: 20px;
}
 a {
  font-size: 30px;
}
a:hover {
  color: black;
}
</style>