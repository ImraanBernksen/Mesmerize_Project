<template>
    <NavBar/>
    <div class="background">
        <h2>Login</h2>
        <form>
          <div class="form-outline mb-4">
            <label class="form-label" for="form2Example1">Email address</label>
            <input type="email" placeholder="@gmail.com" id="form2Example1" class="form-control" />
          </div>
          <div class="form-outline mb-4">
            <label class="form-label" for="form2Example2">Password</label>
            <input type="password" placeholder="*****" id="form2Example2" class="form-control" />
          </div>
          <button type="submit" class="btn btn-primary btn-block mb-4">SIGN IN</button>
          <div class="text-center">
            <p>Don't have an account <a href="/signup">Sign up</a></p>
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