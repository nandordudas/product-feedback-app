import { flushPromises, mount } from '@vue/test-utils'
import { defineComponent } from 'vue'

import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('should display message', async () => {
    const TestComponent = defineComponent({
      components: { HelloWorld },
      template: '<Suspense><HelloWorld msg="Hello world" /></Suspense>',
    })

    const wrapper = mount(TestComponent)

    await flushPromises()

    expect(wrapper.find('h1').text()).toBe('Hello world')
    expect(wrapper.find('div').text()).toBe('userName"')
  })
})
