<script setup name="ExampleUtilitiesComponent" lang="ts">
const props = defineProps({
	message: { type: String, required: true },
})
</script>
<template>
	<h1 class="text-2xl">Example Utilities Component!</h1>
	<div class="my-4">
		<p data-test-message>{{ props.message }}!</p>
	</div>
</template>
<style lang="postcss"></style>
