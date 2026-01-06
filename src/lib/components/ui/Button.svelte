<script lang="ts">
	export let href: string = '#';
	export let variant: 'primary' | 'outline' = 'primary';
	export let className: string = '';
</script>

<a
	{href}
	class={`
    inline-block rounded-md px-8 py-4 text-sm font-medium transition
    ${
			variant === 'primary'
				? 'bg-black text-white hover:bg-gray-900'
				: 'hover:border hover:bg-gray-200'
		}
    ${className}
  `}
>
	<slot />
</a>
