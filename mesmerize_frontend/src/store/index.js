import { createStore } from 'vuex'
import axios from 'axios';
import {useCookies} from 'vue3-cookies';
const { cookies } = useCookies();
const mesmerizeAPI = "https://mesmerize-backend.onrender.com/";
import router from '@/router';

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
    async deleteUser({ commit, dispatch }, id) {
      try {
        await axios.delete(`${mesmerizeAPI}User/${id}`);
        commit('setMessage', 'User deleted successfully');
        dispatch('getUsers');
      } catch (error) {
        commit('setMessage', 'Failed to delete user');
      }
    },
    /** Register **/
    async registerUser(context, payload) {
      try {
        const res = await axios.post(`${mesmerizeAPI}register`, payload);
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
          cookies.set('app_cookie', jwToken)
          context.commit('setMessage', msg);
          setTimeout(()=> {
            router.push({name: 'home'})
          }), 3000
        } else {
          context.commit('setMessage', err);
        }
      } catch (error) {
        console.error(error);
      }
    },
    /** Logout **/
    logout({ commit }) {
      localStorage.removeItem('token');
      commit('theUser', null);
      commit('setIsLoggedIn', false);
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
    async deleteProduct({ commit, dispatch }, id) {
      try {
        await axios.delete(`${mesmerizeAPI}Product/${id}`);
        commit('setMessage', 'Product deleted successfully');
        dispatch('getProducts');
      } catch (error) {
        commit('setMessage', 'Failed to delete product');
      }
    }
  },
  modules: {
  }
})