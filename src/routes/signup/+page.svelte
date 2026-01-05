<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { supabase } from '$lib/supabase/client';
	import * as Alert from '$lib/components/ui/alert';
	let name = '';
	let email = '';
	let password = '';
	let error = '';
	let loading = false;

	async function signUp() {
		loading = true;
		error = '';

		const { error: signUpError } = await supabase.auth.signUp({
			email,
			password,
			options: {
				data: {
					name
				}
			}
		});

		if (signUpError) {
			error = signUpError.message;
		} else {
			window.location.href = '/dashboard';
		}

		loading = false;
	}
</script>

<form class="max-w-sm mx-auto space-y-4" on:submit|preventDefault={signUp}>
	<h1 class="text-2xl font-bold">Create account</h1>

	<Input
		type="text"
		placeholder="Full name"
		bind:value={name}
		required
		class="w-full border p-2 rounded"
	/>

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
		{loading ? 'Creating account...' : 'Sign up'}
	</button>
</form>
