import { createStore } from 'vuex'
import axios from 'axios';
const mesmerizeAPI = "https://mesmerize-backend.onrender.com/"

export default createStore({
  state: {
    user: null,
    users: null,
    product: null,
    products: null,
    theSpinner: null,
    asc: true,
    message: null,
    isLoggedIn: false
  },
  getters: {
  },
  mutations: {
    theUser(state, value) {
      state.user = value
    },
    theUsers(state, values) {
      state.users = values
    },
    theProduct(state, value) {
      state.product = value
    },
    theProducts(state, values){
      state.products = values
    },
    setSpinner(state, value) {
      state.spinner = value
    },
    setMessage(state, value) {
      state.message = value
    },
    sortProductsByPrice: (state) => {
      state.products.sort((a, b) => {
        return a.price - b.price;
      });
      if (!state.asc) {
        state.products.reverse();
      }
      state.asc = !state.asc;
    }, 
    setIsLoggedIn(state, isLoggedin) {
      state.isLoggedIn = isLoggedin;
    }
  },
  actions: {
    async getUsers(context) {
      const res = await axios.get(`${mesmerizeAPI}Users`);
      let { results, err} = await res.data;
      if(results) {
        context.commit('theUsers', results)
      }else {
        context.commit('setMessage', err)
      }
    },
    async getProducts(context) {
      const res = await axios.get(`${mesmerizeAPI}Products`);
      let { results, err} = await res.data;
      if(results) {
        context.commit('theProducts', results)
      }else {
        context.commit('setMessage', err)
      }
    },
    async getProduct(context, id){
      context.commit('setSpinner', true)
      const res = await axios.get(`${mesmerizeAPI}Product/${id}`);
      const {results, err} = await res.data;
      if(results){
        context.commit('theProduct', results[0]);
        context.commit('setSpinner', false);
      } else {
        context.commit('setMessage', err);
        context.commit('setSpinner', true);
      }
    },
    async login({ commit }, {userEmail, userPassword}) {
      try {
        const response = await axios.post('/login', { userEmail, userPassword });
        const { token, user } = response.data;
        localStorage.setItem('token', token);
        commit('theUser', user);
        commit('setIsLoggedIn', true);
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    logout({ commit }) {
      localStorage.removeItem('token');
      commit('theUser', null);
      commit('setIsLoggedIn', false);
    }
  },
  modules: {
  }
})