<template>
	<div>
			<button @click="loginFacebook">Login Facebook</button>
	</div>
</template>

<script>
	import firebase from 'firebase';
	export default {
		data() {
			return {}
		},
		methods: {
			loginFacebook() {
				const provider = new firebase.auth.FacebookAuthProvider();

				firebase.auth().signInWithPopup(provider)
				.then(result => {
					console.log('Sukses');
					console.log(result);
				})
				.catch(err => {
					console.log('Error');
					console.log(err);
				})
			}
		}
	}
</script>