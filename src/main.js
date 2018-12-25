import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

var config = {
	apiKey: 'AIzaSyCoMZqeXmzeKUqbOEs8sWUUyqY0gY9zCsA',
	authDomain: 'social-api-c9e4b.firebaseapp.com',
	databaseURL: 'https://social-api-c9e4b.firebaseio.com',
	projectId: 'social-api-c9e4b',
	storageBucket: 'social-api-c9e4b.appspot.com',
	messagingSenderId: '134907007087'
};

firebase.initializeApp(config);

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
