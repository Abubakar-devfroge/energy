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

<div class="min-h-screen flex flex-col justify-center items-center dark:bg-gray-900 px-4">
	<div class="w-full max-w-md bg-white dark:bg-gray-800 p-8 sm:p-10">
		<h1 class="text-3xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
			Create Account
		</h1>

		<form class="space-y-5" on:submit|preventDefault={signUp}>
			<Input
				type="text"
				placeholder="Full name"
				bind:value={name}
				required
				class="w-full dark:border-gray-700 focus:border-blue-500 rounded-md px-4 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400"
			/>

			<Input
				type="email"
				placeholder="Email"
				bind:value={email}
				required
				class="w-full dark:border-gray-700 focus:border-blue-500 rounded-md px-4 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400"
			/>

			<Input
				type="password"
				placeholder="Password"
				bind:value={password}
				required
				class="w-full dark:border-gray-700 focus:border-blue-500 rounded-md px-4 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-400"
			/>

			{#if error}
				<Alert.Root class="mt-2">
					<Alert.Title class="text-red-600 font-medium">Error!</Alert.Title>
					<Alert.Description class="text-red-500 text-sm">
						{error}
					</Alert.Description>
				</Alert.Root>
			{/if}

			<button
				type="submit"
				disabled={loading}
				class="w-full bg-black dark:bg-blue-600 hover:bg-gray-900 dark:hover:bg-blue-700 transition-colors duration-200 text-white font-medium py-3 rounded-lg text-lg"
			>
				{loading ? 'Creating account...' : 'Sign up'}
			</button>

			<div class="text-center text-sm text-gray-500 dark:text-gray-400 mt-3">
				Already have an account?
				<a href="/login" class="text-gray-900 hover:underline">Sign in</a>
			</div>
		</form>
	</div>
</div>
