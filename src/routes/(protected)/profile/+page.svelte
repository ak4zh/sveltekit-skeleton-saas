<script lang="ts">
	import { loading } from '$lib/stores.js';
	import { superForm } from 'sveltekit-superforms/client';
    import { i } from '@inlang/sdk-js';

	export let data;
	const { form, delayed, enhance, allErrors, errors } = superForm(data.form);
	$: loading.set($delayed)

    form.update($form => {
            $form.password = ''
            return $form
        },
        { taint: false }
    )
</script>

<div class="grid grid-cols-1 gap-4">
	<h1 class="text-center">{i('change_password')}</h1>
	<form method="POST" use:enhance class="max-w-3xl mx-auto p-4 card grid grid-cols-1 gap-4">
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
		<label class="label">
            <span>{i('password')}</span>
            <input
                class="input { $errors.confirmPassword ? 'input-error' : '' }"
                type="password"
                placeholder="Confirm password"
                name="confirmPassword"
                bind:value={$form.confirmPassword}
            />
            {#if $errors.confirmPassword}
                <p class="text-error-500">{$errors.confirmPassword}</p>
            {/if}
		</label>
		<button class="btn variant-filled-warning" type="submit">{i('submit')}</button>
	</form>
</div>
