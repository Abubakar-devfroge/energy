<script lang="ts">
	import List from '$lib/components/List.svelte';
	import Navbar from '$lib/components/ui/dashboard/Navbar.svelte';
	import Upload from '$lib/components/Upload.svelte';
import { supabase } from '$lib/supabase/client';
	import { onMount } from 'svelte';

	let name = '';

	onMount(async () => {
		const { data } = await supabase.auth.getUser();
		name = data.user?.user_metadata?.name ?? 'User';
	});
</script>



<Navbar />


<h1 class="text-2xl font-bold">
	Welcome, {name}
</h1>
<a href="/logout" class="text-blue-500 underline">Logout</a>
<Upload />
<List />
