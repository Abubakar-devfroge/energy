<script lang="ts">
	import List from '$lib/components/ui/dashboard/List.svelte';


	import Navbar from '$lib/components/ui/dashboard/Navbar.svelte';
	import Upload from '$lib/components/ui/dashboard/Upload.svelte';

	import { supabase } from '$lib/supabase/client';
	import { onMount } from 'svelte';

	let name = '';

	onMount(async () => {
		const { data } = await supabase.auth.getUser();
		name = data.user?.user_metadata?.name ?? 'User';
	});
</script>

<Navbar />
<Upload />
<List />

