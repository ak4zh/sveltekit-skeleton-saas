<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import {
		AppShell,
		AppRail,
		AppRailTile,
		Modal,
		ProgressRadial,
	} from '@skeletonlabs/skeleton'
	import { loading } from '$lib/stores'
	import { navigating, page } from '$app/stores'
	import Heading from './Heading.svelte';
	import { writable } from 'svelte/store';
	import { MetaTags } from 'svelte-meta-tags';
	import { i } from '@inlang/sdk-js';

	$: currentTab = writable($page.url.pathname)
	$: isProtected = $page.route.id?.startsWith('/(protected)/')
	$: loading.set(false)
</script>

<MetaTags 
	title="Home"
	titleTemplate="%s | {i('seo.title')}"
	description={i('seo.description')} 
/>
<Modal />

<AppShell>
	<svelte:fragment slot="pageHeader"><Heading /></svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		{#if isProtected && $page.data.user}
			<div id="sidebar-left" class="hidden h-full md:block">
				<AppRail selected={currentTab}>
					<AppRailTile label="" tag="a" href="/" value="/">
					</AppRailTile>
					<AppRailTile
						label=""
						tag="a"
						href="/dashboard"
						value="/dashboard">
					</AppRailTile>
				</AppRail>
			</div>
		{/if}
	</svelte:fragment>

	{#if $navigating || $loading}
		<div
			class="fixed bottom-0 left-0 right-0 top-0 z-50 flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-gray-500 opacity-75"
		>
			<ProgressRadial stroke={100} />
		</div>
	{/if}

	<div class="mx-auto max-w-7xl p-4 pt-8">
		<slot />
	</div>

	<svelte:fragment slot="footer">
		{#if isProtected && $page.data.user}
			<div id="bottom-bar" class="md:hidden">
				<AppRail
					selected={currentTab}
					class="!w-full [&>div:nth-child(2)>div]:w-full [&>div:nth-child(2)]:flex"
				>
					<AppRailTile label="Home" tag="a" href="/" value="/">
					</AppRailTile>
					<AppRailTile
						label="Dashboard"
						tag="a"
						href="/dashboard"
						value="/dashboard">
					</AppRailTile
					>
				</AppRail>
			</div>
		{/if}
	</svelte:fragment>
</AppShell>
