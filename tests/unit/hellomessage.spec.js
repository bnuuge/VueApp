import { shallowMount } from '@vue/test-utils'
import HelloMessage from '@/components/HelloMessage.vue'

describe('HelloMessage.vue', () => {
    it('renders props.msg when passed', () => {
      const msg = 'new message'
      const wrapper = shallowMount(HelloMessage, {
        props: { msg }
      })
      expect(wrapper.text()).toMatch(msg)
    })
  })