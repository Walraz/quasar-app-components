<template>
  <q-list separator dense style="min-width: 150px">
    <AppListItem v-for="item of visibleItems" v-bind="item" />
  </q-list>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import AppListItem from './AppListItem.vue'
import { AppListItemProps } from '..'

const props = defineProps<{
  items: AppListItemProps[]
}>()

const visibleItems = computed(() => {
  return props.items.filter((x) =>
    typeof x.visible === 'boolean' ? x.visible : true,
  )
})
</script>
