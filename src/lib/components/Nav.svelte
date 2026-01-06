<script>
	let img = '/ener.png';
	let src = '/ke.svg';
	import Button from '$lib/components/ui/Button.svelte';
</script>

<div>
	<div
		class="relative z-10 bg-transparent mx-auto flex max-w-7xl flex-row items-center justify-between space-x-2 p-2 sm:space-x-3 sm:p-2 xl:px-0"
	>
		<div class="flex items-center space-x-2">
			<div class="flex flex-col items-start">
				<div class="flex items-center justify-center gap-2 mb-2 w-full">
					<img src={img} alt="kenya" class="w-12 h-auto ml-12" />
				</div>
			</div>
		</div>

		<div class="flex w-auto items-center space-x-2">
			<Button href="/login" variant="outline">Sign in</Button>
			<!-- <Button href="/signup" variant="primary">Get started</Button> -->
		</div>
	</div>
</div>
