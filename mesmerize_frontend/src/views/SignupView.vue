<template>
    <NavBar/>
    <div class="background">
        <h2>Signup</h2>
        <form>
              <div class="form-outline mb-4">
                <label class="form-label" for="form3Example1">First name</label>
                <input type="text" id="form3Example1" class="form-control" required />
              </div>
              <div class="form-outline mb-4">
                <label class="form-label" for="form3Example2">Last name</label>
                <input type="text" id="form3Example2" class="form-control" required />
              </div>
              <div class="form-outline mb-4">
                <label class="form-label" for="form3Example3">Email address</label>
                <input type="email" placeholder="@gmail.com" id="form3Example3" class="form-control" required />
              </div>
              <div class="form-outline mb-4">
                <label class="form-label" for="form3Example4">Password</label>
                <input type="password" placeholder="*****" id="form3Example4" class="form-control" required />
              </div>
              <div class="form-outline mb-4">
                <label class="form-label" for="form3Example2">Date</label>
                <input type="date" id="form3Example2" class="form-control" required />
              </div>
              <div class="form-outline mb-4">
                <label class="form-label" for="form3Example1">Profile Image</label>
                <input type="text" value="https://i.postimg.cc/gk1Rx1wb/Default-User-Profile.jpg" id="form3Example1" class="form-control" required />
              </div>
          <button type="submit" class="btn btn-outline-light btn-block mb-4">Create</button>
          <div class="text-center">
            <p>Have an account already <a href="/login">Login</a></p>
          </div>
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