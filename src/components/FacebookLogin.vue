<template>
  <div class="login">
  	<facebook-login class="button"
      appId="444687676029645"
      @login="getUserData"
      @logout="onLogout"
      @get-initial-status="getUserData">
    </facebook-login>
  </div>
</template>

<script>
import facebookLogin from 'facebook-login-vuejs';

export default {
  name: 'FacebookLogin',
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