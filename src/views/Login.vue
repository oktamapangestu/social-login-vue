<template>
  <div class="login">
  	<!-- <h5>Login menggunakan facebook</h5>
  	<FacebookLogin></FacebookLogin> -->
  	<h5>Login menggunakan FireBase</h5>
  	<FireLogin></FireLogin>
  	<h5>Login menggunakan Google</h5>
  	<GoogleLogin></GoogleLogin>
  	<h5>Login menggunakan Facebook</h5>
  	<FacebookFireLogin></FacebookFireLogin>
  </div>
</template>

<script>
	import FacebookLogin from '@/components/FacebookLogin';
	import FacebookFireLogin from '@/components/FacebookFireLogin';
	import FireLogin from '@/components/FireLogin';
	import GoogleLogin from '@/components/GoogleLogin';
export default {
  name: 'login',
  components: {
  	FacebookLogin,
  	FireLogin,
  	GoogleLogin,
  	FacebookFireLogin
  }
}
</script>
