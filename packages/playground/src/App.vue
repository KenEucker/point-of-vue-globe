<template>
	<div class="text-center">
		<h1 class="text-5xl my-5">Point Of Vue Globe</h1>
		<div class="my-10">
			<a href="http://localhost:8100/">
				<h2 class="text-3xl my-3">Go To The Point Of Vue Playground</h2>
				<p>Play with each component and it's properties.</p>
			</a>
		</div>
		<div class="my-10">
			<a href="http://localhost:8200/">
				<h2 class="text-3xl my-3">Go To The Point Of Vue Docs</h2>
				<p>Read the full documentation for the Point Of Vue Components.</p>
			</a>
		</div>
		<div class="my-10">
			<h2 class="text-3xl my-3">Point Of Vue Components Demo</h2>
			<ExampleCoreComponent message="Hello from 'point-of-vue-globe-lib'" />
		</div>
	</div>
</template>

<script>
// import { ExampleComponent } from 'point-of-vue-globe-lib' // -> registered via plugin in main.js

export default {
	name: 'App',
}
</script>
