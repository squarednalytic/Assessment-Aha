import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const API_URL = 'http://localhost:3000/users';

export default new Vuex.Store({
  state: {
    isAuthenticated: !!localStorage.getItem('auth'),
    user: JSON.parse(localStorage.getItem('user')) || null
  },
  mutations: {
    setAuth(state, payload) {
      state.isAuthenticated = payload;
    },
    setUser(state, user) {
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
    clearAuth(state) {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem('auth');
      localStorage.removeItem('user');
    }
  },
  actions: {
    async signUp({ commit }, { username, password }) {
      try {
        const response = await axios.post(API_URL, { username, password });
        localStorage.setItem('auth', true);
        commit('setAuth', true);
        commit('setUser', response.data);
      } catch (error) {
        console.error('Error signing up:', error);
      }
    },
    async signIn({ commit }, { username, password }) {
      try {
        const response = await axios.get(API_URL, {
          params: {
            username,
            password
          }
        });
        if (response.data.length) {
          localStorage.setItem('auth', true);
          commit('setAuth', true);
          commit('setUser', response.data[0]);
        } else {
          throw new Error('Invalid credentials');
        }
      } catch (error) {
        console.error('Error signing in:', error);
      }
    },
    logout({ commit }) {
      commit('clearAuth');
    }
  },
  getters: {
    isAuthenticated: state => state.isAuthenticated,
    user: state => state.user
  }
});
