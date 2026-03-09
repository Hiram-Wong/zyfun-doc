---
layout: home
title: Redirecting...
---

<script setup>
import { onMounted } from 'vue'
import { withBase } from 'vitepress'

onMounted(() => {
  location.replace(withBase('/zh-CN/'))
})
</script>
