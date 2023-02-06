import type { App } from 'vue'
import ExampleCoreComponent from './core/ExampleCoreComponent/ExampleCoreComponent.vue'
import ExampleUtilitiesComponent from './utilities/ExampleUtilitiesComponent/ExampleUtilitiesComponent.vue'

function PointOfVuePlugin(app: App) {
	app.component('ExampleCoreComponent', ExampleCoreComponent)
	app.component('ExampleUtilitiesComponent', ExampleUtilitiesComponent)
}

export { ExampleCoreComponent, ExampleUtilitiesComponent, PointOfVuePlugin }
