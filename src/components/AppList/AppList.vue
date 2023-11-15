<template>
  <q-list style="min-width: 150px" v-bind="props.props">
    <AppListItem
      :component="props.component"
      :list-props="props.props"
      :props="item"
      :key="$i"
      v-for="(item, $i) of visibleItems"
    />
  </q-list>
</template>

<script setup lang="ts">
import { Component, computed } from 'vue'
import AppListItem from './AppListItem.vue'
import { AppListItemProps } from '..'
import { QListProps } from 'quasar'

const props = withDefaults(
  defineProps<{
    component: Component
    items: AppListItemProps[]
    props?: QListProps
  }>(),
  {
    props: () => ({}),
  },
)

const visibleItems = computed(() => {
  return props.items.filter((x) =>
    typeof x.visible === 'boolean' ? x.visible : true,
  )
})
</script>
