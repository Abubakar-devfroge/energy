<script lang="ts">
	import { supabase } from '$lib/supabase/client';
	import { onMount } from 'svelte';

	let readings: { id: string; timestamp: string; consumption: number }[] = [];
	let loading = true;
	let error = '';

	onMount(async () => {
		loading = true;
		error = '';

		const {
			data: { user }
		} = await supabase.auth.getUser();

		if (!user) {
			error = 'Not authenticated';
			loading = false;
			return;
		}

		const { data, error: dbError } = await supabase
			.from('energy_data')
			.select('id, timestamp, consumption')
			.eq('user_id', user.id)
			.order('timestamp', { ascending: true });

		if (dbError) {
			error = dbError.message;
		} else {
			readings = data ?? [];
		}

		loading = false;
	});
</script>

<div class="max-w-4xl mx-auto p-6">
	<h1 class="text-2xl font-bold mb-4">Your Energy Readings</h1>

	{#if loading}
		<p>Loading readings...</p>
	{:else if error}
		<p class="text-red-500">{error}</p>
	{:else if readings.length === 0}
		<p>No readings found. Add some energy data first!</p>
	{:else}
		<table class="w-full border-collapse">
			<thead>
				<tr class="bg-gray-100 dark:bg-gray-700">
					<th class="border px-4 py-2 text-left">Timestamp</th>
					<th class="border px-4 py-2 text-left">Consumption (kWh)</th>
				</tr>
			</thead>
			<tbody>
				{#each readings as r}
					<tr class="border-b dark:border-gray-600">
						<td class="border px-4 py-2">{new Date(r.timestamp).toLocaleString()}</td>
						<td class="border px-4 py-2">{r.consumption}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	{/if}
</div>
