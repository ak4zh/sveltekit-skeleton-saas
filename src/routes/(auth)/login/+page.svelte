<script lang="ts">
	import { enhance } from "$app/forms";
</script>

<div class="grid grid-cols-1 gap-4">
	<h1 class="text-center">Sign in</h1>
	<form method="POST" use:enhance class="max-w-3xl mx-auto p-4 card grid grid-cols-1 gap-4">
        <label class="label">
            <span>Email</span>
            <input class="input" type="email" placeholder="email" name="email" />
        </label>
        <label class="label">
            <span>Password</span>
            <input class="input" type="password" placeholder="password" name="password" />
        </label>
		<button class="btn variant-filled-warning" type="submit">Submit</button>
	</form>
</div>
