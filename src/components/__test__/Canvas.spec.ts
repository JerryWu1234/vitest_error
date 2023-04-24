import { describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Canvas from '../HelloWorld.vue'

describe('testing the canvas of property', () => {
  it('coordinate', () => {
    const wrapper = mount(Canvas)
    const element = wrapper.findAll('.node').at(0)
    expect(element).toHaveLength(1)
    const element2 = wrapper.get('.classtest')
    expect(element2).not.toBeNull()
  })