<script>
	let img = '/ener.png';
	let src = '/ke.svg';
	let flag = 'EN.png';
</script>

<!-- <div class=" bg-gray-300 border-t-2 border-gray-300 m-10"></div> -->

<footer class="pt-8 dark:bg-transparent">
	<div class="w-full max-w-screen-2xl mx-auto p-4 pb-8 lg:mt-10">
		<div class="flex flex-wrap items-center justify-between gap-2.5">
			<div class="flex-1 max-w-md">
				<p class="text-base font-bold text-gray-950 dark:text-slate-300">Note:</p>
				<p class="text-sm font-light text-gray-600 mt-4">
					<em> This is a prototype version of the Energy Auditing System.</em>
				</p>
				<!-- quick links -->
				<div class="flex gap-4 items-center text-gray-950 dark:text-slate-400 sm:mt-20 mt-10">
					<a
						href="/terms-and-conditions"
						data-phx-link="redirect"
						data-phx-link-state="push"
						class="text-gray-950 dark:text-slate-400 text-xs font-normal"
					>
						Terms and Conditions
					</a>
					|
					<a
						href="/privacy-policy"
						data-phx-link="redirect"
						data-phx-link-state="push"
						class="text-gray-950 dark:text-slate-400 text-xs font-normal"
					>
						Privacy Policy
					</a>
				</div>
			</div>
			<!--  -->
			<div>
				<!-- logos -->
				<div class="flex items-center justify-center gap-2 mb-2 w-full">
					<img src={img} alt="kenya" class="w-12 h-auto ml-12" />
				</div>
				<p
					class="text-xs tracking-normal font-light text-gray-950 dark:text-slate-400 max-w-xs my-6"
				>
					Automate your workflows with Echo
				</p>
				<!-- lang switcher -->
				<div class="relative w-fit">
					<!-- Toggle Button -->
					<span
						class="flex items-center gap-1.5 ml-2 text-sm text-gray-950 dark:text-slate-400 font-semibold"
					>
						<img class="h-4 w-5" src={flag} alt="English flag" />
						English
					</span>
				</div>
			</div>
			<!--  -->
		</div>
	</div>
</footer>
