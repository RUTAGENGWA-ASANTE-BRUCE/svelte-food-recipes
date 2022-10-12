
<script>
    export let data;
    console.log(data)
 </script>

<h1 class="text-2xl text-center mb-10">Food Recepies</h1>

<div class="grid grid-cols-3 gap-4">
	{#each data.recipes as item}
		<a href={`/recipes/${item.id}`} class="relative text-center">
			<img class="rounded-lg shadow-md" src={item.image} alt={item.title} />
			<p class="text-sm absolute z-20 top-0 mt-20 text-center inset-x-0 text-white">{item.title}</p>
		</a>
	{/each}
</div>
