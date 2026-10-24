<script setup lang="ts">
import { withBase } from 'vitepress'

defineProps<{ alt: string }>()
</script>

<template>
  <img
    class="profile-photo"
    :src="withBase('/avatar.jpg')"
    :alt="alt"
    width="140"
    height="140"
  />
</template>
