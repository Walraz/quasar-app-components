<template>
  <q-item
    v-close-popup="!Boolean(visibleItems.length)"
    v-bind="props.componentProps"
    clickable
    @click="onClick"
  >
    <q-item-section side v-if="props.icon">
      <q-icon size="16px" :name="props.icon" :color="props.color" />
    </q-item-section>
    <q-item-section :class="textColor" v-if="props.label">
      {{ props.label }}
    </q-item-section>
    <q-item-section side v-if="visibleItems.length">
      <q-icon size="16px" name="mdi-chevron-right" />
    </q-item-section>

    <template v-if="visibleItems.length">
      <component
        :is="p.component"
        square
        anchor="top end"
        self="top start"
        no-focus
        separate-close-popup
      >
        <AppList
          :component="p.component"
          v-bind="listProps"
          :items="visibleItems"
        />
      </component>
    </template>
  </q-item>
</template>

<script setup lang="ts">
import { Component, computed } from 'vue'
import AppList from './AppList.vue'
import { AppListItemProps } from '..'
import { QListProps } from 'quasar'

const p = withDefaults(
  defineProps<{
    component: Component
    props: AppListItemProps
    listProps?: QListProps
  }>(),
  {
    listProps: () => ({}),
  },
)

const textColor = computed(() => {
  return `text-${p.props.color}`
})

const onClick = () => {
  if (!p.props.clickFn) return
  p.props.clickFn()
}

const visibleItems = computed(() => {
  return (p.props.items || []).filter((x) =>
    typeof x.visible === 'boolean' ? x.visible : true,
  )
})
</script>
