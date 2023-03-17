import { createStore } from 'vuex'
import axios from 'axios';
import Cookies from 'js-cookie';
const mesmerizeAPI = "https://mesmerize-backend.onrender.com/"

export default createStore({
  state: {
    user: null,
    users: null,
    product: null,
    products: null,
    token: null,
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
    theToken(state, value) {
      state.token = value
    },
    setSpinner(state, value) {
      state.spinner = value
    },
    setMessage(state, value) {
      state.message = value
    },
    setSortPrice: (state) => {
      state.products.sort((a, b) => {
        return a.productPrice - b.productPrice;
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
    /** Users **/
    async getUsers(context) {
      const res = await axios.get(`${mesmerizeAPI}Users`);
      let { results, err} = await res.data;
      if(results) {
        context.commit('theUsers', results)
      }else {
        context.commit('setMessage', err)
      }
    },
    /** Products **/
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
    async addProduct(context, payload) {
      try {
        const res = await axios.post(`${mesmerizeAPI}product`, payload);
        console.log('Response:' , res);
        let { result, msg, err } = await res.data;
        if (result) {
          context.commit('theProduct', result);
          context.commit ('setMessage', msg);
        }else {
          context.commit('setMessage', err)
        }
      } catch (error) {
        console.error(error) 
      }
    },
    /** Register **/
    async registerUser(context, payload) {
      try {
        const res = await axios.post(`${mesmerizeAPI}user`, payload);
        console.log('Response:', res);
        const { result, msg, err } = await res.data;
        if (result) {
          context.commit('theUser', result);
          context.commit('setMessage', msg);
        } else {
          context.commit('setMessage', err)
        }
      } catch (error) {
        console.error(error);
      }
    },
    /** Login **/
    async login(context, payload) {
      try {
        const response = await axios.post(`${mesmerizeAPI}login`, payload);
        console.log('Response' , response);
        const {result, jwToken, msg, err} = await response.data
        if (result) {
          context.commit('theUser', result);
          context.commit('theToken', jwToken);
          Cookies.set('app_cookie', jwToken)
          context.commit('setMessage', msg);
        } else {
          context.commit('setMessage', err);
        }
      } catch (error) {
        console.error(error);
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