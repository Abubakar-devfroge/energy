<script lang="ts">
	import Input from '$lib/components/ui/input/input.svelte';
	import { supabase } from '$lib/supabase/client';
	import * as Alert from '$lib/components/ui/alert';

	let email = '';
	let password = '';
	let error = '';
	let loading = false;

	async function login() {
		loading = true;
		error = '';

		const { error: loginError } = await supabase.auth.signInWithPassword({
			email,
			password
		});

		if (loginError) {
			error = loginError.message;
		} else {
			window.location.href = '/dashboard';
		}

		loading = false;
	}
</script>

<form class="max-w-sm mx-auto mt-6 space-y-4" on:submit|preventDefault={login}>
	<h1 class="text-2xl font-bold">Sign in</h1>

	<Input
		type="email"
		placeholder="Email"
		bind:value={email}
		required
		class="w-full border p-2 rounded"
	/>

	<Input
		type="password"
		placeholder="Password"
		bind:value={password}
		required
		class="w-full border p-2 rounded"
	/>

	{#if error}
		<Alert.Root class="mt-2">
			<Alert.Title class="text-red-600">Error!</Alert.Title>
			<Alert.Description class="text-red-500">
				{error}
			</Alert.Description>
		</Alert.Root>
	{/if}

	<button type="submit" disabled={loading} class="w-full bg-black text-white py-2 rounded">
		{loading ? 'Signing in...' : 'Sign in'}
	</button>
</form>
