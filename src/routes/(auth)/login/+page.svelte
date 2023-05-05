<script lang="ts">
	import { enhance } from '$app/forms';
	import LL, { setLocale } from '$i18n/i18n-svelte';
</script>

<div class="grid grid-cols-1 gap-4">
	<h1 class="text-center">{$LL.ROUTE.AUTH.LOG_IN()}</h1>
	<form method="POST" use:enhance class="max-w-3xl mx-auto p-4 card grid grid-cols-1 gap-4">
		<label class="label">
			<span>{$LL.ROUTE.AUTH.EMAIL()}</span>
			<input class="input" type="email" placeholder="email" name="email" />
		</label>
		<label class="label">
			<span>{$LL.ROUTE.AUTH.PASSWORD()}</span>
			<input class="input" type="password" placeholder="password" name="password" />
		</label>
		<p>
			{$LL.ROUTE.AUTH.NO_ACCOUNT()}
			<a href="/signup">{$LL.ROUTE.AUTH.SIGN_UP()}</a>
		</p>
		<button class="btn variant-filled-warning" type="submit">{$LL.ROUTE.AUTH.SUBMIT()}</button>
	</form>
</div>
