<script>
	let src = '/mainta.jpg';
	let title = 'Identify energy inefficiencies early.';
	let paragraph =
		'Mention @echo anywhere to request implementation, fixes or just clarification. Echo responds just like a team member.';
</script>

<div class=" py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="lg:grid lg:grid-cols-2 lg:gap-x-16 lg:items-center">
			<!-- Text Column -->
			<div class="max-w-lg mx-auto lg:mx-0">
				<h3 class="text-sm font-semibold text-blue-500 uppercase tracking-wide">Deploy faster</h3>
				<h2 class="mt-3 text-xl sm:text-5xl font-bold text-gray-900">
					{title}
				</h2>
				<p class="mt-6 text-lg text-gray-500 leading-relaxed">
					{paragraph}
				</p>
				<a href="/signup" class="inline-block mt-8 text-blue-500 font-semibold hover:underline">
					Get started &rarr;
				</a>
			</div>

			<!-- Image Column -->
			<div class="mt-10 lg:mt-0 lg:flex lg:justify-end">
				<img
					{src}
					alt="Product screenshot"
					class="w-full max-w-xl rounded-2xl ring-1 ring-gray-200/10"
				/>
			</div>
		</div>
	</div>
</div>
