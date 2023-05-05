<script lang="ts">
	import LL from '$i18n/i18n-svelte'
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center">
		<h2 class="font-bold">{$LL.PAGES.HOME.TAG_LINE()}</h2>

		<div class="flex justify-center space-x-2">
			<a
				class="btn btn-filled"
				href="https://skeleton.dev/"
				target="_blank"
				rel="noreferrer"
			>
				Launch Documentation
			</a>
		</div>
	</div>
</div>
