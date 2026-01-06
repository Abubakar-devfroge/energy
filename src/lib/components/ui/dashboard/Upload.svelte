<script lang="ts">
	import { supabase } from '$lib/supabase/client';
	import { onMount } from 'svelte';

	let img = 'add.svg';
	let timestamp = '';
	let consumption = '';
	let loading = false;
	let message = '';
	let error = '';

	async function handleSubmit() {
		loading = true;
		error = '';
		message = '';

		const {
			data: { user }
		} = await supabase.auth.getUser();

		if (!user) {
			error = 'You must be logged in to submit data.';
			loading = false;
			return;
		}

		const { error: dbError } = await supabase.from('energy_data').insert([
			{
				user_id: user.id,
				timestamp,
				consumption: parseFloat(consumption)
			}
		]);

		if (dbError) {
			error = dbError.message;
		} else {
			message = 'Energy reading saved successfully!';

			timestamp = '';
			consumption = '';
		}

		loading = false;
	}
</script>

<div class="flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl mx-auto p-4 rounded-md">
	<!-- Form -->
	<div class=" dark:bg-gray-800 p-6 dark:border-gray-700 flex-1 ">
		<h2 class="text-xl font-semibold mb-4">Add Energy Reading</h2>

		<form on:submit|preventDefault={handleSubmit} class="space-y-4">
			<div>
				<label for="timestamp" class="block text-sm font-medium mb-1">Timestamp</label>
				<input
					id="timestamp"
					type="datetime-local"
					bind:value={timestamp}
					required
					class="w-full border rounded-md px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
				/>
			</div>

			<div>
				<label for="consumption" class="block text-sm font-medium mb-1">Consumption (kWh)</label>
				<input
					id="consumption"
					type="number"
					step="0.01"
					bind:value={consumption}
					required
					class="w-full border rounded-md px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
				/>
			</div>

			<button
				type="submit"
				disabled={loading}
				class="w-full bg-black dark:bg-blue-600 hover:bg-gray-900 dark:hover:bg-blue-700 text-white py-2 rounded-lg"
			>
				{loading ? 'Saving...' : 'Save Reading'}
			</button>
		</form>

		{#if message}
			<p class="mt-3 text-green-600 text-sm">{message}</p>
		{/if}

		{#if error}
			<p class="mt-3 text-red-500 text-sm">{error}</p>
		{/if}
	</div>

	<!-- SVG Image -->
	<div class="shrink-0">
		<img src="{img}" alt="svg" class="w-48 h-48 md:w-64 md:h-64" />
	</div>
</div>
