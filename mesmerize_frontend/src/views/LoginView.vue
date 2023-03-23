<template>
    <NavBar/>
    <div class="background">
        <h2>Login</h2>
        <form @submit.prevent="login">
          <div class="form-outline mb-4">
            <label class="form-label" for="form2Example1">Email address</label>
            <input type="email" v-model="payload.userEmail" placeholder="@gmail.com" id="form2Example1" class="form-control" required />
          </div>
          <div class="form-outline mb-4">
            <label class="form-label" for="form2Example2">Password</label>
            <input type="password" v-model="payload.userPassword" placeholder="*****" id="form2Example2" class="form-control" required />
          </div>
          <button type="submit" class="btn btn-outline-light btn-block mb-4" @click.prevent="login">SIGN IN</button>
          <div class="text-center">
            <p>Don't have an account <a href="/signup">Sign up</a></p>
          </div>
          <div class="form-outline mb-4">
            <p class="text-white">{{ user?.firstName }} {{ user?.lastName }}</p>
            <p class="text-white">{{ message }}</p>
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
},
data() {
  return {
    payload: {
      userEmail: '',
      userPassword: ''
    },
  }
},
computed: {
  message() {
    return this.$store.state.message
  },
  user() {
    return this.$store.state.user
  }
},
methods: {
  login() {
    console.log('Debug:', this.payload);
    this.$store.dispatch('login', this.payload)
  }
}
}
</script>
<style>

</style>