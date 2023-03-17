<template>
    <NavBar/>
    <div class="background">
        <h2>Contact</h2>
        <form name="contact-form" action="https://formspree.io/f/xwkzrbbv" method="POST">
          <div class="form-outline mb-4">
            <label class="form-label" for="form4Example1">Name</label>
            <input type="text" id="form4Example1" name="name" placeholder="Name..." class="form-control" required />
          </div>
          <div class="form-outline mb-4">
            <label class="form-label" for="form4Example2">Email address</label>
            <input type="email" id="form4Example2" name="email" placeholder="@gmail.com" class="form-control" required />
          </div>
          <div class="form-outline mb-4">
            <label class="form-label" for="form4Example3">Message</label>
            <textarea class="form-control" id="form4Example3" name="message" placeholder="Type something..." rows="4" required></textarea>
          </div>
          <button type="submit" class="btn btn-outline-light btn-block mb-4">Send</button>
        </form>
    </div>
    <FooterComponent/>
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