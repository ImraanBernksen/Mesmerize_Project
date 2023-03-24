import { createStore } from 'vuex'
import axios from 'axios';
import router from '@/router';
// import {useCookies} from 'vue3-cookies';
// const { cookies } = useCookies();
const mesmerizeAPI = "https://mesmerize-backend.onrender.com/";

export default createStore({
  state: {
    user: null || JSON.parse(localStorage.getItem('user')),
    users: null,
    userAuth: null,
    product: null,
    products: null,
    cart: null,
    token: null,
    theSpinner: null,
    asc: true,
    message: null,
    isLoggedIn: false
  },
  getters: {
  },
  mutations: {
    theUser(state, user) {
      state.user = user,
      state.userAuth = true,
      localStorage.setItem('user', JSON.stringify(user));
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
    theCart(state, value) {
      state.cart = value
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
    /** User **/
    async getUsers(context) {
      const res = await axios.get(`${mesmerizeAPI}users`);
      let { results, err} = await res.data;
      if(results) {
        context.commit('theUsers', results)
      }else {
        context.commit('setMessage', err)
      }
    },
    async getUser(context, id) {
      const res = await axios.get(`${mesmerizeAPI}users/${id}`);
      let { results, err} = await res.data;
      if(results) {
        context.commit('theUser', results)
      }else {
        context.commit('setMessage', err)
      }
    },
    async updateUser(context, payload) {
      try {
        const res = await axios.put(`${mesmerizeAPI}user/${payload.userID}`, payload)
        console.log('Response:' , res);
        alert ('USER UPDATED SUCCESSFULLY')
        let { results, err} = await res.data;
        if (results) {
          context.commit('theUser', results[0])          
        } else {
          context.commit('setMessage', err)
        }
      } catch(error) {
        console.log(error);
      }
    },
    async deleteUser({ commit, dispatch }, id) {
      try {
        await axios.delete(`${mesmerizeAPI}User/${id}`);
        commit('setMessage', 'User deleted successfully');
        alert ('USER DELETED SUCCESSFULLY')
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
        alert ('USER CREATED SUCCESSFULLY')
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
        alert ('LOGGED IN SUCCESSFULLY')
        const {result, jwToken, msg, err} = await response.data
        if (result) {
          context.commit('theUser', result);
          context.commit('theToken', jwToken);
          localStorage.setItem('login_token', jwToken);
          localStorage.setItem('user', JSON.stringify(result));
          // cookies.set('app_cookie', jwToken)
          context.commit('setMessage', msg);
          setTimeout(()=> {
            router.push({name: 'product'})
          }), 3000
        } else {
          context.commit('setMessage', err);
        }
      } catch (error) {
        console.error(error);
      }
    },
    /** Product **/
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
        alert ('PRODUCT CREATED SUCCESSFULLY')
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
    async updateProduct(context, payload) {
      try {
        const res = await axios.put(`${mesmerizeAPI}product/${payload.productID}`, payload)
        console.log('Response:' , res);
        alert ('PRODUCT UPDATED SUCCESSFULLY')
        let { results, err} = await res.data;
        if (results) {
          context.commit('theProduct', results[0])          
        } else {
          context.commit('setMessage', err)
        }
      } catch(error) {
        console.log(error);
      }
    },
    async deleteProduct({ commit, dispatch }, id) {
      try {
        await axios.delete(`${mesmerizeAPI}Product/${id}`);
        commit('setMessage', 'Product deleted successfully');
        alert ('PRODUCT DELETED SUCCESSFULLY')
        dispatch('getProducts');
      } catch (error) {
        commit('setMessage', 'Failed to delete product');
      }
    },
    /** Cart **/
    async getCart(context, id) {
      const res = await axios.get(`${mesmerizeAPI}/user/${id}carts`);
      let {results, err} = await res.data
      if (results) {
        context.commit('theCart', results)        
      } else {
        context.commit('setMessage', err)
      }
    },
    async addCart(context, id) {
      const res = await axios.post(`${mesmerizeAPI}/user/${id}cart`);
      let {results, err} = await res.data
      if (results) {
        context.commit('theCart', results)        
      } else {
        context.commit('setMessage', err)
      }
    },
    async updateCart(context, id) {
      const res = await axios.put(`${mesmerizeAPI}/user/${id}cart/${id}`);
      let {results, err} = await res.data
      if (results) {
        context.commit('theCart', results)        
      } else {
        context.commit('setMessage', err)
      }
    },
    async deleteCarts({ commit, dispatch }, id) {
      try {
        await axios.delete(`${mesmerizeAPI}/user/${id}/cart`);
        commit('setMessage', 'Carts deleted successfully');
        dispatch('getCart');
      } catch (error) {
        commit('setMessage', 'Failed to delete carts');
      } 
    },
    async deleteCart({ commit, dispatch }, id) {
      try {
        await axios.delete(`${mesmerizeAPI}/user/${id}/cart/${id}`);
        commit('setMessage', 'Cart deleted successfully');
        dispatch('getCart');
      } catch (error) {
        commit('setMessage', 'Failed to delete cart');
      } 
    }
  },
  modules: {
  }
})