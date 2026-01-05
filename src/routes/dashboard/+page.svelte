<script lang="ts">
	import { supabase } from '$lib/supabase/client';
	import { onMount } from 'svelte';

	let name = '';

	onMount(async () => {
		const { data } = await supabase.auth.getUser();
		name = data.user?.user_metadata?.name ?? 'User';
	});
</script>

<h1 class="text-2xl font-bold">
	Welcome, {name}
</h1>
<a href="/logout" class="text-blue-500 underline">Logout</a>
