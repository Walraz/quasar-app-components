<template>
  <q-list v-bind="props.props" separator dense style="min-width: 150px">
    <AppListItem
      :list-props="props.props"
      :props="item"
      v-for="item of visibleItems"
    />
  </q-list>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import AppListItem from './AppListItem.vue'
import { AppListItemProps } from '..'
import { QListProps } from 'quasar'

const props = withDefaults(
  defineProps<{
    items: AppListItemProps[]
    props: QListProps
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
