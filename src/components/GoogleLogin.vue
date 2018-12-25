<template>
	<div>
		<button @click="loginGoogle">Login Google</button>
	</div>
</template>

<script>
	import firebase from 'firebase';
	export default {
		data() {
			return {}
		},
		methods: {
			loginGoogle() {
				const provider = new firebase.auth.GoogleAuthProvider();

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