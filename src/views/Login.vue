<template>
  <div class="login">
  	Login
  	<facebook-login class="button"
      appId="444687676029645"
      @login="getUserData"
      @logout="onLogout"
      @get-initial-status="getUserData">
    </facebook-login>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import facebookLogin from 'facebook-login-vuejs';

export default {
  name: 'login',
  components: {
  	facebookLogin
  },
  methods: {
  	getUserData(data) {
  		console.log(data);
  	},
  	onLogout(data) {
  		console.log(data);
  	}
  }
}
</script>
