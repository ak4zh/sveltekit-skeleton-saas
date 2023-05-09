<script lang="ts">
	import { loading } from '$lib/stores.js';
    import { superForm } from 'sveltekit-superforms/client';
    import { MetaTags } from 'svelte-meta-tags';
    import { i } from '@inlang/sdk-js';

	export let data;
	const { form, delayed, enhance, errors } = superForm(data.form);
    $: loading.set($delayed)
</script>

<MetaTags 
	title={i('create_account')}
	titleTemplate="%s | {i('seo.title')}"
/>

<div class="grid grid-cols-1 gap-4">
	<h1 class="text-center">{i('create_account')}</h1>
	<form method="POST" use:enhance class="max-w-3xl mx-auto p-4 card grid grid-cols-1 gap-4">
        <label class="label">
            <span>{i('email')}</span>
            <input
                class="input { $errors.email ? 'input-error' : '' }"
                type="email"
                placeholder="email"
                name="email"
                bind:value={$form.email}
            />
            {#if $errors.email}
                <p class="text-error-500">{$errors.email}</p>
            {/if}
        </label>
        <label class="label">
            <span>{i('password')}</span>
            <input
                class="input { $errors.password ? 'input-error' : '' }"
                type="password"
                placeholder="password"
                name="password"
                bind:value={$form.password}
            />
            {#if $errors.password}
                <p class="text-error-500">{$errors.password}</p>
            {/if}
        </label>
		<button class="btn variant-filled-warning" type="submit">{i('submit')}</button>
	</form>
</div>