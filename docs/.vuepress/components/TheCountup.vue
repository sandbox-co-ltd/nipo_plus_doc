<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const count = ref(0)
    return { count }
  },
})
</script>

<template>
  <div>
    {{ count }}<br>
    <button @click="count++">カウントアップ</button>
  </div>
</template>