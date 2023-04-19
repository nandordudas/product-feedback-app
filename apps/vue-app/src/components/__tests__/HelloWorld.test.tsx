import { flushPromises, mount } from '@vue/test-utils'
import { Suspense, defineComponent } from 'vue'

import HelloWorld from '~/components/HelloWorld.vue'

const HelloWorldComponent = defineComponent({
  setup() {
    return () => (
      <Suspense>
        <HelloWorld msg="Hello world" />
      </Suspense>
    )
  },
})

describe('HelloWorld', () => {
  it('should display message', async () => {
    const wrapper = mount(HelloWorldComponent)

    await flushPromises()

    expect(wrapper.find('h1').text()).toBe('Hello world')
    expect(wrapper.find('div').text()).toBe('userName')
  })
})
