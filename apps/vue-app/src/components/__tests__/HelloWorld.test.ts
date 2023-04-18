import { mount } from '@vue/test-utils'

import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('should display message', () => {
    const wrapper = mount(HelloWorld, {
      props: {
        msg: 'Hello world',
      },
    })

    expect(wrapper.text()).toContain('Hello world')
  })
})
