<script setup lang="ts">
import { computed } from 'vue'
import type { Direction, NodeLink } from '../../core'

const props = defineProps({
  nodelink: {
    type: Object as () => NodeLink,
    required: true,
  },

  clickFunc: {
    type: Function,
    required: true,
  },
})
function clickF(event: Event, isadd: boolean, dir?: Direction) {
  const o = { x: props.nodelink.value.x, y: props.nodelink.value.y }
  switch (dir) {
    case 'down':
      o.y = o.y + 1
      break
    case 'up':
      o.y = o.y - 1
      break
    case 'next':
      o.x = o.x + 1
      break
    case 'prev':
      o.x = o.x - 1
      break
  }
  props.clickFunc(event, isadd, {
    x: o.x,
    y: o.y,
  }, dir)
}

const computeIsShow = () => {
  const newArray = new Set<Direction>()
  return computed(() => {
    props.nodelink.value.direction.forEach((dir) => {
      if (!props.nodelink.direction.includes(dir))
        newArray.add(dir)
    })
    return newArray
  })
}
</script>

<template>
  <div
    class="h-full w-ful "
    @click="(event: Event) => clickF(event, false)"
  >
    <div
      :class="props.actived ? 'scale-[0.9]' : ''"
      class="h-full w-ful relative  border-solid border-1  border-opacity-[0]"
    >
      <div
        v-if="computeIsShow().value.has('prev')"
        class="absolute left--91px z-1 cursor-pointer"
        @click.prevent.stop="(event:Event) => clickF(event, true, 'prev')"
      >
        2
      </div>

      <div
        v-if="computeIsShow().value.has('up')"
        class="absolute top--91px left--1 z-1 cursor-pointer"
        @click.prevent.stop="(event:Event) => clickF(event, true, 'up')"
      >
2
      </div>
      <div
        v-if="computeIsShow().value.has('next')"
        class="absolute right--92px z-1 cursor-pointer"
        @click.prevent.stop="(event:Event) => clickF(event, true, 'next')"
      >
       2
      </div>
      <div
        v-if="computeIsShow().value.has('down')"
        class="absolute bottom--95px left--.5 z-1 cursor-pointer"
        @click.prevent.stop="(event:Event) => clickF(event, true, 'down')"
      >
       2
      </div>
      <div
        v-if="props.nodelink.value.direction.includes('up')"
        :class="props.nodelink?.up === null ? 'i-bt-icon-up' : 'i-bt-conicon-up'"
        class=" h-6px w-24px overflow-hidden top-0 absolute left-[calc(50%-12px)] "
      />

      <div
        v-if="props.nodelink.value.direction.includes('next')"
        :class="props.nodelink?.next === null ? 'i-bt-icon-right' : 'i-bt-conicon-right'"
        class="h-24px w-6px overflow-hidden right-0 absolute top-[calc(50%-12px)] "
      />

      <div
        v-if="props.nodelink.value.direction.includes('down')"
        :class="props.nodelink?.down === null ? 'i-bt-icon-down' : 'i-bt-conicon-down'"
        class="h-6px w-24px overflow-hidden bottom-0 absolute right-[calc(50%-12px)] "
      />
      <div
        v-if="props.nodelink.value.direction.includes('prev')"
        :class="props.nodelink?.prev === null ? 'i-bt-icon-left' : 'i-bt-conicon-left'"
        class="h-24px w-6px overflow-hidden left-0 absolute  top-[calc(50%-12px)] "
      />

      <div class="p-6px w-full h-full box-border overflow-hidden">
        <slot />
      </div>
    </div>
  </div>
</template>
