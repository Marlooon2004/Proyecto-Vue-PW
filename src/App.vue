<!-- App.vue -->
<script setup>
import { ref, provide, watch } from 'vue'

const isDark = ref(false)

watch(isDark, (value) => {
  document.documentElement.setAttribute('data-theme', value ? 'dark' : 'light')
})

// Hacemos que esté disponible para otros componentes
provide('isDark', isDark)
provide('toggleTheme', () => {
  isDark.value = !isDark.value
})
</script>

<template>
  <router-view />
</template>
