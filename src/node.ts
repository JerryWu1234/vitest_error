import { VNode } from "vue"

export class NodeLink<T = NodeItem> {
  value: T
  next: NodeLink<T> | null
  prev: NodeLink<T> | null
  up: NodeLink<T> | null
  down: NodeLink<T> | null
  direction: Array<Direction>
  constructor(value: T) {
    this.value = value
    this.next = null
    this.prev = null
    this.up = null
    this.down = null
    this.direction = []
  }
}

export interface NodeItem extends Record<string, any> {
  x: number
  y: number
  vueEl: VNode
  direction: Array<Direction>
}

export type Direction = 'next' | 'prev' | 'up' | 'down'