import { flushPromises, mount } from '@vue/test-utils'
import { Suspense } from 'vue'

import HelloWorld from '~/components/HelloWorld.vue'

describe('HelloWorld', () => {
  it('should display message', async () => {
    const wrapper = mount(() => (
      <Suspense>
        <HelloWorld msg="Hello world" />
      </Suspense>
    ))

    await flushPromises()

    expect(wrapper.find('h1').text()).toBe('Hello world')
    expect(wrapper.find('div').text()).toBe('userName')
  })

  it('should display message 2', async () => {
    const wrapper = mount(() => (
      <Suspense>
        <HelloWorld />
      </Suspense>
    ))

    await flushPromises()

    expect(wrapper.find('p').text()).toBe('No users found')
  })
})
