import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		siteData: null,
		pageData: null,
		pages: [],
		pageBackground: null
	},
	mutations: {
		SET_SITE_DATA (state, payload) {
		  state.siteData = {
				siteURL: payload.config.url,
				siteName: payload.data.name,
				siteDescription: payload.data.description
		  };
		},
		SET_PAGE_DATA (state, payload) {
		  state.pageData = payload;
		},
		SET_PAGES_DATA(state, payload) {
			state.pages.push(payload)
		},
		SET_PAGE_BG(state, payload) {
			state.pageBackground = payload;
		}
	},
	getters: {
		GET_SITE_DATA(state) {
			return state.siteData;
		},
		GET_PAGE_DATA(state) {
			return state.pageData;
		},
		GET_PAGES_DATA(state) {
			return state.pages;
		}
	},
	actions: {
		async RETRIEVE_SITE_DATA({ commit }) {
			const data = await axios.get('/');
			commit('SET_SITE_DATA', data);
		},
		async RETRIEVE_PAGES({ commit }) {
			const pagesData = await axios.get('/wp/v2/pages?per_page=100');
			let pages = [];
			for(let page of pagesData.data) {
				pages.push({
					id: page.id,
					menu_order: page.menu_order,
					slug: page.slug,
					title: page.title.rendered,
					acf: page.acf
				})
			}
			commit('SET_PAGES_DATA', pages);
		},
		async RETRIEVE_PAGE_DATA({ commit, state }, pageSlug) {
			const pageData = await axios.get(`/wp/v2/pages/?slug=${pageSlug}`);
			let page = {
				id: pageData.data[0].id,
				slug: pageData.data[0].slug,
				title: pageData.data[0].title.rendered,
				acf: pageData.data[0].acf,
			}
			commit('SET_PAGE_DATA', page);
		},
		SET_PAGE_BG({ commit }, imageURL) {
			commit('SET_PAGE_BG', imageURL);
		}
	}
})
