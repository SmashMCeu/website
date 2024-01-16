<script setup lang="ts">
const props = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div>
    Beautiful Error Page!!!
    Error => {{ props.error?.message }}
  </div>
</template>