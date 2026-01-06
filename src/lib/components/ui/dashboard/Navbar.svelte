<script>
	let img = '/ener.png';
	let src = '/ke.svg';
	import Button from '$lib/components/ui/Button.svelte';
</script>

<div>
	<div
		class="relative z-10 bg-black text-white w-full flex items-center justify-between px-4 sm:px-6 h-16"
	>
		<div class="flex items-center space-x-2">
			<div class="flex flex-col items-start">
				<div class="flex items-center justify-center gap-2 mb-2 w-full">
					<span class="text-2xl sm:text-3xl font-bold tracking-tight text-white ml-12"> Echo </span>
				</div>
			</div>
		</div>

		<div class="flex w-auto items-center space-x-2">
			<Button href="/logout" variant="outline">Logout</Button>
			<!-- <Button href="/signup" variant="primary">Get started</Button> -->
		</div>
	</div>
</div>
