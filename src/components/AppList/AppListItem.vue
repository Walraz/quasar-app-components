<template>
  <q-item
    v-close-popup="!Boolean(visibleItems.length)"
    v-bind="componentProps"
    clickable
    @click="onClick"
  >
    <q-item-section side v-if="icon">
      <q-icon size="16px" :name="icon" :color="color" />
    </q-item-section>
    <q-item-section :class="textColor" v-if="label">
      {{ label }}
    </q-item-section>
    <q-item-section side v-if="visibleItems.length">
      <q-icon size="16px" name="mdi-chevron-right" />
    </q-item-section>

    <template v-if="visibleItems.length">
      <q-menu square anchor="top end" self="top start">
        <AppList :items="visibleItems" />
      </q-menu>
    </template>
  </q-item>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import AppList from './AppList.vue'
import { AppListItemProps } from '..'

const props = defineProps<AppListItemProps>()

const textColor = computed(() => {
  return `text-${props.color}`
})

const onClick = () => {
  if (!props.clickFn) return
  props.clickFn()
}

const visibleItems = computed(() => {
  return (props.items || []).filter((x) =>
    typeof x.visible === 'boolean' ? x.visible : true,
  )
})
</script>
