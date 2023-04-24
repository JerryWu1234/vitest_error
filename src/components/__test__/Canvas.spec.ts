import { describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Canvas from '../HelloWorld.vue'
import {NodeLink} from '../../node.ts'
const node = new NodeLink({
  x: 0,
  y: 1,
  value: h('div', {class: 'node'},1),
  direction: ['next']
})
describe('testing the canvas of property', () => {
  it('coordinate', () => {
    const wrapper = mount(Canvas, {props: {modelValue:node }})
    const element = wrapper.findAll('.node').at(0)
    expect(element).not.toBeNull()
  })
})