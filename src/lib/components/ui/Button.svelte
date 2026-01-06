<script lang="ts">
	export let href: string = '#';
	export let variant: 'primary' | 'outline' = 'primary';
	export let className: string = '';
</script>

<a
	{href}
	class={`
    inline-block  px-6 py-2 text-sm font-medium transition mx-1
    ${
			variant === 'primary'
				? 'bg-black text-white rounded-md hover:bg-gray-900'
				: 'bg-white text-black rounded-full hover:bg-gray-200'
		}
    ${className}
  `}
>
	<slot />
</a>
