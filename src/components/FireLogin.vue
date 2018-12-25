<template>
	<div>
		Email : <input type="text" name="email" v-model="email"><br>
		Password : <input type="password" name="password" v-model="password"><br>
		<button type="button" @click="daftar">Daftar</button>
		<button type="button" @click="login">Login</button>
	</div>
</template>

<script>
	import firebase from 'firebase';
	export default {
		name: 'FireLogin',
		data() {
			return {
				email: '',
				password: ''
			}
		},
		methods: {
			daftar() {
				firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(user => {
					console.log(user);
					alert('Akun kamu telah dibuat');
				}, err => {
					console.log(err);
					alert('error');
				})
			},
			login() {
				firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(user => {
					console.log(user);
					alert('Anda telah login');
				}, err => {
					console.log(err);
					alert('error');
				})
			}
		}
	}
</script>