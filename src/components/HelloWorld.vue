<script setup lang="ts">
import SlotName from './slotname.vue'
import {NodeLink} from '../node.ts'
import {h} from 'vue'
const props = defineProps({
  modelValue: {
    type: Object as () => NodeLink,
    required: true,
  },
})
const ss = ( ) => {}


</script>

<template>
  <SlotName :nodelink="props.modelValue" :clickFunc="ss">
    232323
  </Slotname>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
