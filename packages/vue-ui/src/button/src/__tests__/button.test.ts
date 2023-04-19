import { shallowMount } from '@vue/test-utils'

import UIButton from '../button.vue'

describe('UIButton', () => {
  it('should display properly', () => {
    const wrapper = shallowMount(UIButton, { props: {}, slots: { default: 'Click me' } })

    expect(wrapper.find('button').exists()).toBe(true)
    expect(wrapper.find('button').text()).toBe('Click me')
  })
})
