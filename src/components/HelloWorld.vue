<script setup lang="ts">
import SlotName from './slotname.vue'
import {NodeLink} from '../node.ts'
import {h} from 'vue'
const ss = ( ) => {}
const node = new NodeLink({
  x: 0,
  y: 1,
  value: h('div', {class: 'node'},1),
  direction: ['next']
})

</script>

<template>
  <SlotName :nodelink="node" :clickFunc="ss">
    232323
  </Slotname>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
