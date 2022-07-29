<template>
  	<div class="login-container flx-center">
		<div class="login-box">
			<div class="login-left">
				<img src="@/assets/images/login_left0.png" alt="login" />
			</div>
			<div class="login-form">
				<div class="login-logo">
					<img class="login-icon" src="@/assets/images/logo.svg" alt="" />
					<div class="logo-text">Cat-Admin</div>
				</div>
        <LoginForm />
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup name="login">
import LoginForm from "./components/LoginForm.vue";

</script>

<style scoped lang="scss">
@import "./index.scss";
</style>