<script lang="ts">
    import LL from '$i18n/i18n-svelte'
	import { loading } from '$lib/stores.js';
    import { superForm } from 'sveltekit-superforms/client';
    import { MetaTags } from 'svelte-meta-tags';

	export let data;
	const { form, delayed, enhance, errors } = superForm(data.form);
    $: loading.set($delayed)
</script>

<MetaTags 
	title={$LL.ROUTE.AUTH.CREATE_ACCOUNT()}
	titleTemplate="%s | {$LL.SEO.TITLE()}"
/>

<div class="grid grid-cols-1 gap-4">
	<h1 class="text-center">{$LL.ROUTE.AUTH.CREATE_ACCOUNT()}</h1>
	<form method="POST" use:enhance class="max-w-3xl mx-auto p-4 card grid grid-cols-1 gap-4">
        <label class="label">
            <span>{$LL.ROUTE.AUTH.EMAIL()}</span>
            <input
                class="input { $errors.email ? 'input-error' : '' }"
                type="email"
                placeholder="email"
                name="email"
                bind:value={$form.email}
            />
            {#if $errors.email}
                <p class="error-message">{$errors.email}</p>
            {/if}
        </label>
        <label class="label">
            <span>{$LL.ROUTE.AUTH.PASSWORD()}</span>
            <input
                class="input { $errors.password ? 'input-error' : '' }"
                type="password"
                placeholder="password"
                name="password"
                bind:value={$form.password}
            />
            {#if $errors.password}
                <p class="error-message">{$errors.password}</p>
            {/if}
        </label>
		<button class="btn variant-filled-warning" type="submit">{$LL.ROUTE.AUTH.SUBMIT()}</button>
	</form>
</div>