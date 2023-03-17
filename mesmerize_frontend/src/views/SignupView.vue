<template>
    <NavBar/>
    <div class="background">
        <h2>Signup</h2>
        <form @submit.prevent="registerUser">
              <div class="form-outline mb-4">
                <label class="form-label" for="form3Example1">First name</label>
                <input type="text" v-model="payload.firstName" class="form-control" required />
              </div>
              <div class="form-outline mb-4">
                <label class="form-label" for="form3Example2">Last name</label>
                <input type="text" v-model="payload.lastName" class="form-control" required />
              </div>
              <div class="form-outline mb-4">
                <label class="form-label" for="form3Example3">Email address</label>
                <input type="email" v-model="payload.userEmail" placeholder="@gmail.com" class="form-control" required />
              </div>
              <div class="form-outline mb-4">
                <label class="form-label" for="form3Example4">Password</label>
                <input type="password" v-model="payload.userPassword" placeholder="*****" class="form-control" required />
              </div>
              <div class="form-outline mb-4">
                <label class="form-label" for="form3Example1">Profile Image</label>
                <input type="text" v-model="payload.userImg" class="form-control" required />
              </div>
              <div class="form-outline mb-4">
                <label class="form-label" for="form3Example2">Date</label>
                <input type="date" v-model="payload.joinDate" class="form-control" required />
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
},
data() {
    return {
      payload: {
        firstName: '',
        lastName: '',
        userEmail: '',
        userPassword: '',
        userImg: 'https://i.postimg.cc/gk1Rx1wb/Default-User-Profile.jpg',
        joinDate: ''
      }
    }
  },
  computed: {
    message() {
      return this.$store.state.message
    }
  },
  methods: {
    registerUser() {
      console.log('Debug', this.payload);
      this.$store.dispatch('registerUser', this.payload)
    }
  }
}
</script>
<style>
    
</style>