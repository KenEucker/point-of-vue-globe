import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ExampleCoreComponent from '../../core/ExampleCoreComponent/ExampleCoreComponent.vue'

describe('Sample Test Suite', () => {
	it('mounts', () => {
		const wrapper = mount(ExampleCoreComponent, {
			props: {
				message: 'Test in Vitest',
			},
		})

		expect(wrapper.exists()).toBe(true)
	})
})
